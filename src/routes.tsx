import React from 'react';
import { RouteComponentProps } from '@reach/router';
import MDPage from './components/MDPage';

import { pages, tabs } from './data/';

interface PageProps extends RouteComponentProps {
  comp: React.ComponentType;
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
  pages.map(({ name, url, comp, ...rest }) => (
    <Page path={url} key={name} comp={comp} {...rest} />
  )),
  tabs.map(({ name, url, mdFileName }) => (
    <Tab path={url} key={name} fileName={mdFileName} />
  )),
];
