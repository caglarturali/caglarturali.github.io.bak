/**
 * Semester component.
 */
import React, { useCallback } from 'react';
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
  const {
    name,
    courses,
    dates: { start, end },
  } = semesterData;

  const formatDate = useCallback((isoDate: string) => {
    return new Date(isoDate).toLocaleDateString();
  }, []);

  return (
    <details open={showDetails} className={classes.root}>
      <summary data-tip={`${formatDate(start)} - ${formatDate(end)}`}>
        {name}
      </summary>
      {courses.map((course) => (
        <Course key={course.courseName} courseData={course} />
      ))}
    </details>
  );
};

export default Semester;
