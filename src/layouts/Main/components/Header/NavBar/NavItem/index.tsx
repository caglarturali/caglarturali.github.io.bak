/**
 * NavItem component.
 */
import React from 'react';
import { Link, navigate } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUseStyles } from 'react-jss';
import { TabSpec } from '../../../../../../models';
import styles from './styles';

const useStyles = createUseStyles(styles);

const NavItem: React.FC<TabSpec> = ({ name, url, ...iconProps }) => {
  const classes = useStyles();

  const onCloseClicked = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/');
  };

  return (
    <span className={classes.root}>
      <Link
        to={url}
        getProps={({ isCurrent }) => {
          return {
            className: isCurrent ? classes.currentTab : classes.otherTab,
          };
        }}
      >
        <FontAwesomeIcon {...iconProps} size={iconProps.size || 'lg'} />
        <span className={classes.navText}>{name}</span>
        <FontAwesomeIcon
          onClick={onCloseClicked}
          className="closeButton"
          icon="times"
          size="1x"
        />
      </Link>
    </span>
  );
};

export default NavItem;
