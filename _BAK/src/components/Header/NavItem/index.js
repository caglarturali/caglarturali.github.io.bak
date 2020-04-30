/**
 * NavItem component.
 */
import React from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUseStyles } from 'react-jss';
import styles from './styles';

const useStyles = createUseStyles(styles);

const NavItem = ({ icon, color, linkTo, linkName }) => {
  const classes = useStyles();

  return (
    <span className={classes.root}>
      <Link to={linkTo}>
        <FontAwesomeIcon icon={icon} size="lg" color={color} />
        <span className={classes.navText}>{linkName}</span>
      </Link>
    </span>
  );
};

export default NavItem;
