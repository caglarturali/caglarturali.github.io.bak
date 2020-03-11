/**
 * Contact component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import Container from '../Container';
import contactInfo from '../../data/contact.json';
import styles from './styles';

const useStyles = createUseStyles(styles);

const Contact = () => {
  const classes = useStyles();

  return (
    <Container
      title={contactInfo.sectionTitle}
      subtitle={contactInfo.sectionSubtitle}
    >
      <ul>
        {contactInfo.content.map((contactItem) => (
          <li
            className={classes.contactItem}
            key={`contact-page-${contactItem.name}`}
          >
            <a
              href={contactItem.url}
              aria-label={`Find me on ${contactItem.name}`}
              title={`Find me on ${contactItem.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactItem.name}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Contact;
