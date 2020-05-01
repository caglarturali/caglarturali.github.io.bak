/**
 * Education component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import Container from '../../components/Container';
import { School, BaseProps } from '../../models';
import styles from './styles';

const useStyles = createUseStyles(styles);

export type EducationProps = BaseProps<School>;

const Education: React.FC<EducationProps> = ({ data, fileName }) => {
  const classes = useStyles();

  return (
    <Container
      title={data.name}
      subtitle={data.desc}
      seo={{ title: fileName, description: data.desc }}
    >
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
