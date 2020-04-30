/**
 * NavItem component.
 */
import React from 'react';
import { Link } from '@reach/router';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { createUseStyles } from 'react-jss';
import { Linkable } from '../../../../../../../models';
import styles from './styles';

const useStyles = createUseStyles(styles);

export type NavItemProps = Linkable;

const NavItem: React.FC<NavItemProps & FontAwesomeIconProps> = ({
  name,
  url,
  ...iconProps
}) => {
  const classes = useStyles();

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
