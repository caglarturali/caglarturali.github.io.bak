/**
 * LeftBar component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ContactItem } from '../../../../models';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface LeftBarProps {
  contactData: ContactItem[];
}

const LeftBar: React.FC<LeftBarProps> = ({ contactData }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        {/* Home button */}
        <Link
          to="/"
          key="home-page"
          className={classes.item}
          aria-label="Home page"
          title="Home page"
        >
          <FontAwesomeIcon className={classes.icon} icon="home" size="lg" />
        </Link>
        {/* Contact buttons */}
        {contactData.map(({ name, url, icon }) => (
          <a
            className={classes.item}
            key={`left-bar-${name}`}
            href={url}
            aria-label={`Find me on ${name}`}
            title={`Find me on ${name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={classes.icon}
              icon={icon as IconProp}
              size="lg"
            />
          </a>
        ))}
      </div>
      <div>
        <span className={classes.item} title="Useless button!">
          <FontAwesomeIcon icon="cog" size="lg" />
        </span>
      </div>
    </div>
  );
};

export default LeftBar;
