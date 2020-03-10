/**
 * Education component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import Container from '../Container';
import education from '../../data/education.json';
import styles from './styles';

const useStyles = createUseStyles(styles);

const Education = () => {
  const classes = useStyles();

  return (
    <Container
      title={education.sectionTitle}
      subtitle={education.sectionSubtitle}
    >
      <ul>
        {education.content.map((entry) => (
          <div className="container__list" key={entry.years}>
            <li key={entry.years} className="education__entry">
              <div className={classes.school}>{entry.school}</div>
              <div className={classes.department}>{entry.department}</div>
              <div className={classes.degree}>{entry.degree}</div>
              <div className={classes.years}>{entry.years}</div>
            </li>
          </div>
        ))}
      </ul>
    </Container>
  );
};

export default Education;
