import React from 'react';
import Greeter from '../views/Greeter';
import Diploma from '../views/Diploma';
import { PageLink, TabLink } from '../models';
import { jsOrange, midBlue, green, pink } from '../theme/colors';

import greetingData from './json/greeter.json';
import contactData from './json/contact.json';
import diplomaData from './json/diploma.json';
import pkg from '../../package.json';

export const pages: PageLink[] = [
  {
    name: 'Home',
    url: '/',
    icon: 'home',
    isInternal: true,
    comp: () => (
      <Greeter
        greetingData={greetingData}
        contactData={contactData}
        repoUrl={pkg.repository.url}
      />
    ),
  },
  {
    name: 'Diploma',
    url: '/diploma',
    icon: 'graduation-cap',
    isInternal: true,
    comp: () => <Diploma diplomaData={diplomaData} />,
  },
];

export const tabs: TabLink[] = [
  {
    icon: ['fab', 'js'],
    color: jsOrange,
    url: '/skills',
    name: 'skills.js',
    mdFileName: 'skills',
  },
  {
    icon: 'university',
    color: midBlue,
    url: '/education',
    name: '.educationrc',
    mdFileName: 'education',
  },
  {
    icon: 'sliders-h',
    color: green,
    url: '/projects',
    name: 'projects.config',
    mdFileName: 'projects',
  },
  {
    icon: ['fab', 'sass'],
    color: pink,
    url: '/certificates',
    name: 'certificates.sass',
    mdFileName: 'certificates',
  },
];
