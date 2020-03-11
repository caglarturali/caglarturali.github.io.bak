/**
 * Main layout.
 */
import React from 'react';
import injectSheet from 'react-jss';
import Header from '../../components/Header';
import StatusBar from '../../components/StatusBar';
import LeftBar from '../../components/LeftBar';
import styles from './styles';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <LeftBar />
      <main>{children}</main>
      <StatusBar />
    </div>
  );
};

export default injectSheet(styles)(MainLayout);
