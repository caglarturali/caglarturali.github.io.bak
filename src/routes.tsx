import React from 'react';
import { RouteComponentProps } from '@reach/router';
import MDPage, { MDPageProps } from './components/MDPage';
import { PageProps } from './models';

import { pages, tabs } from './data/';

type ViewProps = RouteComponentProps & PageProps;
const View: React.FC<ViewProps> = ({ comp: Comp, ...rest }) => {
  return <Comp {...rest} />;
};

type TabProps = RouteComponentProps & MDPageProps;
const Tab: React.FC<TabProps> = (props) => {
  return <MDPage {...props} />;
};

export default [
  pages.map(({ name, url, comp, ...rest }) => (
    <View path={url} key={name} comp={comp} {...rest} />
  )),
  tabs.map(({ name, url, mdFileName }) => (
    <Tab path={url} key={name} fileName={mdFileName} />
  )),
];
