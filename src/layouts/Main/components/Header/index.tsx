/**
 * Header component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import NavBar from './NavBar';
import styles from './styles';
import tabs from '../../../../data/tabs/_';

const useStyles = createUseStyles(styles);

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <NavBar items={tabs} />
    </header>
  );
};

export default Header;
