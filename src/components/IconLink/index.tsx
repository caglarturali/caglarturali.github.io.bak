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

const IconLink: React.FC<ContactItem> = ({
  name,
  url,
  icon,
  isInternal,
  badge,
}) => {
  const classes = useStyles();

  const iconComp = (
    <span className={classes.iconWrapper}>
      <FontAwesomeIcon
        className={classes.icon}
        icon={icon as IconProp}
        size="lg"
      />
      {badge && <span className={classes.badge}>{badge}</span>}
    </span>
  );

  if (isInternal) {
    return (
      <Link
        to={url}
        key={`left-bar-${name}`}
        className={classes.link}
        aria-label={name}
        title={name}
      >
        {iconComp}
      </Link>
    );
  }

  return (
    <a
      href={url}
      key={`left-bar-${name}`}
      className={classes.link}
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
