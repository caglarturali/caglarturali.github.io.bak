/**
 * Education component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import Container from '../Container';
import { Page, School } from '../../models';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface EducationProps {
  data: Page<School>;
}

const Education: React.FC<EducationProps> = ({ data }) => {
  const classes = useStyles();

  return (
    <Container title={data.name} subtitle={data.desc}>
      <ul>
        {data.content.map(({ name, department, degree, years }, i) => (
          <div key={`education-item-${i}`}>
            <li className={classes.entry}>
              <div className={classes.school}>{name}</div>
              <div className={classes.department}>{department}</div>
              <div className={classes.degree}>{degree}</div>
              <div
                className={classes.years}
              >{`${years.start} - ${years.end}`}</div>
            </li>
          </div>
        ))}
      </ul>
    </Container>
  );
};

export default Education;
