/**
 * ButtonLink component.
 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { createUseStyles } from 'react-jss';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface ButtonLinkProps {
  href: string;
  title: string;
  text: string;
  icon: IconProp;
  size: SizeProp;
  showCount?: boolean;
  count?: number;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  title,
  icon,
  size,
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
        <FontAwesomeIcon className="icon" icon={icon} size={size || 'lg'} />
        <span className={classes.text}>{text}</span>
        {!!showCount && <span className={classes.count}>{count}</span>}
      </span>
    </a>
  );
};

export default ButtonLink;
