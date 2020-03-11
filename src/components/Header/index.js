/**
 * Header component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import NavBar from './NavBar';
import styles from './styles';

const useStyles = createUseStyles(styles);

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <NavBar />
    </header>
  );
};

export default Header;
