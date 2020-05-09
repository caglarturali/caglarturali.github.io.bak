import { NavLink } from '../models';
import Greeter from '../views/Greeter';
import Skills from '../views/Skills';
import Education from '../views/Education';
import Projects from '../views/Projects';
import Certificates from '../views/Certificates';
import Contact from '../views/Contact';
import { certificates, contact, education, projects, skills } from '.';
import {
  darkOrange,
  jsOrange,
  midBlue,
  green,
  pink,
  textLightBlue,
} from '../theme/colors';

export const files: NavLink[] = [
  {
    icon: ['fab', 'html5'],
    color: darkOrange,
    url: '/',
    name: 'index.html',
    route: {
      component: Greeter,
      data: contact,
    },
  },
  {
    icon: ['fab', 'js'],
    color: jsOrange,
    url: '/skills',
    name: 'skills.js',
    route: {
      component: Skills,
      data: skills,
    },
  },
  {
    icon: 'university',
    color: midBlue,
    url: '/education',
    name: '.educationrc',
    route: {
      component: Education,
      data: education,
    },
  },
  {
    icon: 'sliders-h',
    color: green,
    url: '/projects',
    name: 'projects.config',
    route: {
      component: Projects,
      data: projects,
    },
  },
  {
    icon: ['fab', 'sass'],
    color: pink,
    url: '/certificates',
    name: 'certificates.sass',
    route: {
      component: Certificates,
      data: certificates,
    },
  },
  {
    icon: ['fab', 'markdown'],
    color: textLightBlue,
    url: '/contact',
    name: 'contact.md',
    route: {
      component: Contact,
      data: contact,
    },
  },
];
