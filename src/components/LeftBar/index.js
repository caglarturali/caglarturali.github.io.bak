/**
 * LeftBar component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactInfo from '../../data/contact.json';
import styles from './styles';

const useStyles = createUseStyles(styles);

const LeftBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        {contactInfo.content.map((contactItem) => (
          <a
            className={classes.item}
            key={`left-bar-${contactItem.name}`}
            href={contactItem.url}
            aria-label={`Find me on ${contactItem.name}`}
            title={`Find me on ${contactItem.name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={classes.icon}
              icon={contactItem.icon}
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
