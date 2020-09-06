import React from 'react';
import { RouteComponentProps } from '@reach/router';
import MDPage from './components/MDPage';
import Greeter from './views/Greeter';
import Diploma from './views/Diploma';

import tabs from './data/tabs/_';
import greetingData from './data/greeter.json';
import contactData from './data/contact.json';
import diplomaData from './data/diploma.json';
import pkg from '../package.json';

interface PageProps extends RouteComponentProps {
  comp: React.ReactType;
}

interface TabProps extends RouteComponentProps {
  fileName: string;
}

const Page: React.FC<PageProps> = ({ comp: Comp, ...rest }) => {
  return <Comp {...rest} />;
};

const Tab: React.FC<TabProps> = (props) => {
  return <MDPage {...props} />;
};

export default [
  <Page
    path="/"
    key="home-page"
    comp={() => (
      <Greeter
        greetingData={greetingData}
        contactData={contactData}
        repoUrl={pkg.repository.url}
      />
    )}
  />,
  <Page
    path="/diploma"
    key="diploma-page"
    comp={() => <Diploma diplomaData={diplomaData} />}
  />,
  tabs.map((file) => (
    <Tab path={file.url} key={file.name} fileName={file.mdFileName} />
  )),
];
