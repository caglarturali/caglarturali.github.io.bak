import { Page, Project } from '../models';

export const projects: Page<Project> = {
  name: 'projects',
  desc: "Some of the projects I've worked on so far",
  content: [
    {
      name: 'GetKernel',
      url: 'https://getkernel.now.sh/',
      summary: 'The kernel store for Ubuntu derivatives.',
      tech: ['NextJS'],
    },
    {
      name: 'turali.js.org',
      url: 'https://turali.js.org/',
      summary: 'The web app you are currently looking at.',
      tech: ['React', 'TypeScript'],
    },
    {
      name: 'Girizgah',
      url: 'https://turali.js.org/girizgah/',
      summary: 'LightDM Webkit theme for Pardus Linux.',
      tech: ['React'],
    },
    {
      name: 'deepintr.org',
      url: 'https://deepintr.org/',
      summary: 'Landing page for an online community.',
      tech: ['GatsbyJS', 'React', 'TypeScript'],
    },
    {
      name: 'WatcherCatBot',
      url: 'https://github.com/caglarturali/WatcherCatBot/',
      summary:
        'A Telegram bot that returns popularity info of the given Linux distribution.',
      tech: ['Node.js', 'Express.js'],
    },
    {
      name: 'Astroloci',
      url: 'https://play.google.com/store/apps/details?id=com.astroloci.app',
      summary: 'A horoscope application for Android.',
      tech: ['Native Android App', 'Express.js REST API'],
    },
    {
      name: 'Bilen Adam',
      url:
        'https://play.google.com/store/apps/details?id=com.caglarturali.bilenadam',
      summary: "Lottery machine for Turkey's national lottery games.",
      tech: ['Unity 3D'],
    },
    {
      name: '2●48',
      url:
        'https://play.google.com/store/apps/details?id=com.caglarturali.the2o48',
      summary:
        'A clone of the popular puzzle game 2048, with unlimited levels.',
      tech: ['Unity 3D'],
    },
  ],
};
