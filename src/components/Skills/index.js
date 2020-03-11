/**
 * Skills component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import Container from '../Container';
import skills from '../../data/skills.json';
import styles from './styles';

const useStyles = createUseStyles(styles);

const Skills = () => {
  const classes = useStyles();

  return (
    <Container title={skills.sectionTitle}>
      {skills.content.map((subSection) => (
        <div key={subSection.title}>
          <h3 className={classes.subSectionTitle}>{subSection.title}</h3>
          <ul>
            {subSection.items.map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Container>
  );
};

export default Skills;
