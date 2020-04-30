/**
 * NavBar component.
 */
import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { createUseStyles } from 'react-jss';
import NavItem, { NavItemProps } from './components/NavItem';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface NavbarProps {
  items: (NavItemProps & FontAwesomeIconProps)[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <ul className={classes.list}>
        {items.map((item) => (
          <li className={classes.listItem} key={item.name}>
            <NavItem {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
