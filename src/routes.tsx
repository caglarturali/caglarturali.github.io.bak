import React from 'react';
import { RouteComponentProps } from '@reach/router';
import MDPage from './components/MDPage';

import { pages, tabs } from './data/';

interface PageProps extends RouteComponentProps {
  comp: React.ReactElement;
}

interface TabProps extends RouteComponentProps {
  fileName: string;
}

const Page: React.FC<PageProps> = ({ comp, ...rest }) => {
  return <React.Fragment {...rest}>{comp}</React.Fragment>;
};

const Tab: React.FC<TabProps> = (props) => {
  return <MDPage {...props} />;
};

export default [
  pages.map(({ name, url, ...rest }) => (
    <Page path={url} key={name} {...rest} />
  )),
  tabs.map(({ name, url, mdFileName }) => (
    <Tab path={url} key={name} fileName={mdFileName} />
  )),
];
