/**
 * IconLink component.
 */
import React from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { createUseStyles } from 'react-jss';
import { ContactItem } from '../../models';
import styles from './styles';

const useStyles = createUseStyles(styles);

const IconLink: React.FC<ContactItem> = ({ name, url, icon, isInternal }) => {
  const classes = useStyles();

  const iconComp = (
    <FontAwesomeIcon
      className={classes.icon}
      icon={icon as IconProp}
      size="lg"
    />
  );

  if (isInternal) {
    return (
      <Link
        to={url}
        key={`left-bar-${name}`}
        className={classes.item}
        aria-label={`${name} page`}
        title={`${name} page`}
      >
        {iconComp}
      </Link>
    );
  }

  return (
    <a
      href={url}
      key={`left-bar-${name}`}
      className={classes.item}
      aria-label={`Find me on ${name}`}
      title={`Find me on ${name}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {iconComp}
    </a>
  );
};

export default IconLink;
