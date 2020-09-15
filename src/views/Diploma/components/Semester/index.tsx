/**
 * Semester component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { DetailsPanel, DiplomaTypes } from '../../../../models';
import Course from './Course';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface SemesterProps extends DetailsPanel {
  semesterData: DiplomaTypes.Semester;
}

const Semester: React.FC<SemesterProps> = ({
  semesterData,
  showDetails = true,
}) => {
  const classes = useStyles();
  const { name, courses } = semesterData;

  const calculateCourseProgress = (course: DiplomaTypes.Course) => {
    const highest = Math.max(...course.books.map((b) => b.progress));
    return Math.min(highest, 100);
  };

  return (
    <details open={showDetails} className={classes.root}>
      <summary>{name}</summary>
      {courses.map((c) => (
        <Course
          key={c.courseName}
          courseData={c}
          progress={calculateCourseProgress(c)}
        />
      ))}
    </details>
  );
};

export default Semester;
