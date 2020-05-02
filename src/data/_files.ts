import { NavLink } from '../models';
import Greeter from '../views/Greeter';
import Skills from '../views/Skills';
import Education from '../views/Education';
import Projects from '../views/Projects';
import Certificates from '../views/Certificates';
import Contact from '../views/Contact';
import { certificates, contact, education, projects, skills } from '.';

export const files: NavLink[] = [
  {
    icon: ['fab', 'html5'],
    color: '#e44d26',
    url: '/',
    name: 'index.html',
    route: {
      component: Greeter,
      data: contact,
    },
  },
  {
    icon: ['fab', 'js'],
    color: '#ffca28',
    url: '/skills',
    name: 'skills.js',
    route: {
      component: Skills,
      data: skills,
    },
  },
  {
    icon: 'university',
    color: '#42a5f5',
    url: '/education',
    name: '.educationrc',
    route: {
      component: Education,
      data: education,
    },
  },
  {
    icon: 'sliders-h',
    color: '#98c379',
    url: '/projects',
    name: 'projects.config',
    route: {
      component: Projects,
      data: projects,
    },
  },
  {
    icon: ['fab', 'sass'],
    color: '#e13e76',
    url: '/certifications',
    name: 'certifications.sass',
    route: {
      component: Certificates,
      data: certificates,
    },
  },
  {
    icon: ['fab', 'markdown'],
    color: '#abb2bf',
    url: '/contact',
    name: 'contact.md',
    route: {
      component: Contact,
      data: contact,
    },
  },
];
