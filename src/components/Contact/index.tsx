/**
 * Contact component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import Container from '../Container';
import { ContactItem, Page } from '../../models';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface ContactProps {
  data: Page<ContactItem>;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  const classes = useStyles();

  return (
    <Container title={data.name} subtitle={data.desc}>
      <ul>
        {data.content.map(({ name, url }) => (
          <li className={classes.contactItem} key={`contact-page-${name}`}>
            <a
              href={url}
              aria-label={`Find me on ${name}`}
              title={`Find me on ${name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Contact;
