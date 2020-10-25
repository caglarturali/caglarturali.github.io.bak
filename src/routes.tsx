import React from 'react';
import { RouteComponentProps, Redirect } from '@reach/router';
import MDTab, { MDTabProps } from './components/MDTab';
import { PageProps } from './models';

import { pages, tabs } from './data/';

type ViewProps = RouteComponentProps & PageProps;
const View: React.FC<ViewProps> = ({ comp: Comp, ...rest }) => {
  return <Comp {...rest} />;
};

type TabProps = RouteComponentProps & MDTabProps;
const Tab: React.FC<TabProps> = ({ fileName }) => {
  return <MDTab fileName={fileName} />;
};

export default [
  pages.map(({ name, url, comp, ...rest }) => (
    <View path={url} key={name} comp={comp} {...rest} />
  )),
  tabs.map(({ name, url, mdFileName }) => (
    <Tab path={url} key={name} fileName={mdFileName} />
  )),
  <Redirect key="notfound" from="*" to="/" default noThrow />,
];
