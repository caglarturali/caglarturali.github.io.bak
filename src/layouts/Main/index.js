/**
 * Main layout.
 */
import React from 'react';
import Header from '../../components/Header';
import StatusBar from '../../components/StatusBar';
import LeftBar from '../../components/LeftBar';

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

export default MainLayout;
