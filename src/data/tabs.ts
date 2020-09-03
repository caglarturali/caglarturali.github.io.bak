import { NavLink } from '../models';
import { jsOrange, midBlue, green, pink, textLightBlue } from '../theme/colors';

export const files: NavLink[] = [
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
  {
    icon: ['fab', 'markdown'],
    color: textLightBlue,
    url: '/contact',
    name: 'contact.md',
    mdFileName: 'contact',
  },
];
