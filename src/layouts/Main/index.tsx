/**
 * Main layout.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import Header from './components/Header';
import LeftBar from './components/LeftBar';
import StatusBar from './components/StatusBar';
import styles from './styles';

const useStyles = createUseStyles(styles);

const MainLayout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <LeftBar />
      <main>{children}</main>
      <StatusBar />
    </div>
  );
};

export default MainLayout;
