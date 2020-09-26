/**
 * Main layout.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import Header from './components/Header';
import LeftBar from './components/LeftBar';
import Explorer from './components/Explorer';
import StatusBar from './components/StatusBar';
import { ContactItem, TabLink } from '../../models';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface TabProps {
  tabs: TabLink[];
}

export interface ContactProps {
  contactData: ContactItem[];
}

export type MainLayoutProps = TabProps & ContactProps;

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  tabs,
  contactData,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const classes = useStyles();

  return (
    <div>
      <Header tabs={tabs} />
      <LeftBar contactData={contactData} />
      <Explorer />
      <main className={classes.content}>{children}</main>
      <StatusBar />
    </div>
  );
};

export default MainLayout;
