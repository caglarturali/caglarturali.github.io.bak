/**
 * NavBar component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import NavItem from '../NavItem';
import navLinks from '../../../data/navLinks.json';
import styles from './styles';

const useStyles = createUseStyles(styles);

const Navbar = () => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <ul className={classes.list}>
        {navLinks.map((navLink) => (
          <li className={classes.listItem} key={navLink.linkName}>
            <NavItem {...navLink} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
