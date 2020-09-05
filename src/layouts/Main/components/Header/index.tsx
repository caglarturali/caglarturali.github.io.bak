/**
 * Header component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import NavBar from './NavBar';
import { TabProps } from '../..';
import styles from './styles';

const useStyles = createUseStyles(styles);

const Header: React.FC<TabProps> = ({ tabs }) => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <NavBar tabs={tabs} />
    </header>
  );
};

export default Header;
