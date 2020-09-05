import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import MDPage from './components/MDPage';
import Greeter from './views/Greeter';

import tabs from './data/tabs/_';
import greeting from './data/greeter.json';
import contact from './data/contact.json';
import pkg from '../package.json';

const Home: React.FC<{ path: string }> = (props) => {
  return (
    <Greeter
      greeting={greeting}
      contactItems={contact.map((item) => ({
        ...item,
        icon: item.icon as IconProp,
      }))}
      repoUrl={pkg.repository.url}
      {...props}
    />
  );
};

const Tab: React.FC<{ path: string; fileName: string }> = (props) => {
  return <MDPage {...props} />;
};

export default [
  <Home path="/" key="home" />,
  tabs.map((file) => (
    <Tab path={file.url} key={file.name} fileName={file.mdFileName} />
  )),
];
