/**
 * ButtonLink component.
 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUseStyles } from 'react-jss';
import styles from './styles';

const useStyles = createUseStyles(styles);

const ButtonLink = ({
  href,
  title,
  icon,
  iconSize,
  text,
  showCount,
  count,
}) => {
  const classes = useStyles();

  return (
    <a
      className={classes.root}
      href={href}
      aria-label={title}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={classes.contents}>
        <FontAwesomeIcon className="icon" icon={icon} size={iconSize || 'lg'} />
        <span className={classes.text}>{text}</span>
        {showCount && <span className={classes.count}>{count}</span>}
      </span>
    </a>
  );
};

export default ButtonLink;
