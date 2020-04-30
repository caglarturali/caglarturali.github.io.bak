/**
 * Header component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import NavBar from './NavBar';
import styles from './styles';
import { navLinks } from '../../../../data/navLinks';

const useStyles = createUseStyles(styles);

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <NavBar items={navLinks} />
    </header>
  );
};

export default Header;
