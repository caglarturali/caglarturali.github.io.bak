/**
 * NavItem component.
 */
import React from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUseStyles } from 'react-jss';
import { NavLink } from '../../../../../../../models';
import styles from './styles';

const useStyles = createUseStyles(styles);

export type NavItemProps = NavLink;

const NavItem: React.FC<NavItemProps> = ({ name, url, ...iconProps }) => {
  const classes = useStyles();

  // Not needed here!
  delete iconProps.route;

  return (
    <span className={classes.root}>
      <Link to={url}>
        <FontAwesomeIcon {...iconProps} size={iconProps.size || 'lg'} />
        <span className={classes.navText}>{name}</span>
      </Link>
    </span>
  );
};

export default NavItem;
