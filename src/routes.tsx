import React from 'react';
import MDPage from './components/MDPage';
import Greeter from './views/Greeter';

import tabs from './data/tabs/_';
import greetingData from './data/greeter.json';
import contactData from './data/contact.json';
import pkg from '../package.json';

const Home: React.FC<{ path: string }> = (props) => {
  return (
    <Greeter
      greeting={greetingData}
      contactItems={contactData}
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
