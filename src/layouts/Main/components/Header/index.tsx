/**
 * Header component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import NavBar from './NavBar';
import { files } from '../../../../data/tabs';
import styles from './styles';

const useStyles = createUseStyles(styles);

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <NavBar items={files} />
    </header>
  );
};

export default Header;
