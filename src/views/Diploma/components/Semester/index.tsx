/**
 * Semester component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { DiplomaTypes } from '../../../../models';
import Course from './Course';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface SemesterProps {
  semesterData: DiplomaTypes.Semester;
}

const Semester: React.FC<SemesterProps> = ({ semesterData }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const classes = useStyles();
  const { name, courses } = semesterData;

  return (
    <details open={true}>
      <summary>{name}</summary>
      {courses.map((c) => (
        <Course courseData={c} key={c.courseName} />
      ))}
    </details>
  );
};

export default Semester;
