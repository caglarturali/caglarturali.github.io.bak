import React from 'react';
import MDPage from './components/MDPage';
import Greeter from './views/Greeter';
import { files } from './data/tabs';

const Home: React.FC<{ path: string }> = (props) => {
  return <Greeter fileName="index.html" {...props} />;
};

const Tab: React.FC<{ path: string; fileName: string }> = (props) => {
  return <MDPage {...props} />;
};

export default [
  <Home path="/" key="home" />,
  files.map((file) => (
    <Tab
      path={file.mdFileName}
      key={file.mdFileName}
      fileName={file.mdFileName}
    />
  )),
];
