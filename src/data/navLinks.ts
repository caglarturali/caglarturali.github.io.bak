import { NavLink } from '../models';

export const navLinks: NavLink[] = [
  {
    icon: ['fab', 'html5'],
    color: '#e44d26',
    url: '/',
    name: 'home.html',
  },
  {
    icon: ['fab', 'js'],
    color: '#ffca28',
    url: '/skills',
    name: 'skills.js',
  },
  {
    icon: 'university',
    color: '#42a5f5',
    url: '/education',
    name: '.educationrc',
  },
  {
    icon: 'sliders-h',
    color: '#98c379',
    url: '/projects',
    name: 'projects.config',
  },
  {
    icon: ['fab', 'sass'],
    color: '#e13e76',
    url: '/certifications',
    name: 'certifications.sass',
  },
  {
    icon: ['fab', 'markdown'],
    color: '#abb2bf',
    url: '/contact',
    name: 'contact.md',
  },
];
