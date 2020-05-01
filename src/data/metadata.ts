import { Metadata } from '../models';
import pkg from '../../package.json';

export const siteMetadata: Metadata = {
  title: 'Çağlar Turalı | JavaScript Developer',
  description: "Çağlar Turalı's personal portfolio website",
  homepage: pkg.homepage,
};

export const metadata: (HTMLMetaElement | any)[] = [
  {
    name: 'description',
    content: siteMetadata.description,
  },
  {
    name: 'keywords',
    content:
      'Çağlar Turalı, Caglar Turali, JavaScript, TypeScript, React, Fullstack JavaScript, Node, Vue, MongoDB, MEAN stack, MERN stack, GatsbyJS, NextJS, Bilen Adam, Astroloci',
  },
  {
    name: 'canonical',
    content: siteMetadata.homepage,
  },
  {
    name: 'theme-color',
    content: '#21252b',
  },
  {
    property: `og:title`,
    content: siteMetadata.title,
  },
  {
    property: `og:description`,
    content: siteMetadata.description,
  },
  {
    property: `og:type`,
    content: `website`,
  },
  {
    property: `og:url`,
    content: siteMetadata.homepage,
  },
  {
    property: `og:image`,
    content: 'https://turali.js.org/public/images/meta-img.png',
  },
  {
    property: `og:image:width`,
    content: '320',
  },
  {
    property: `og:image:height`,
    content: '320',
  },
  {
    name: `twitter:card`,
    content: `summary`,
  },
  {
    name: `twitter:site`,
    content: siteMetadata.homepage,
  },
  {
    name: `twitter:title`,
    content: siteMetadata.title,
  },
  {
    name: `twitter:description`,
    content: siteMetadata.description,
  },
  {
    name: `twitter:image`,
    content: 'https://turali.js.org/public/images/meta-img.png',
  },
  {
    name: `google-site-verification`,
    content: `yoA6kTc96mzuKG5z93MpyxJbTBmCeHRsP64QEEGuI28`,
  },
];
