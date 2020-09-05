/**
 * Main layout.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import Header from './components/Header';
import LeftBar from './components/LeftBar';
import StatusBar from './components/StatusBar';
import { TabSpec, ContactItem } from '../../models';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface TabProps {
  tabs: TabSpec[];
}

export interface MainLayoutProps extends TabProps {
  contactData: ContactItem[];
}

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
      <main>{children}</main>
      <StatusBar />
    </div>
  );
};

export default MainLayout;
