/**
 * Semester component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { DetailsPanel, DiplomaTypes } from '../../../../models';
import {
  calculateSemesterProgress,
  formatDate,
  isOverDue,
} from '../../../../utils';
import Course from './Course';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface SemesterProps extends DetailsPanel {
  semesterData: DiplomaTypes.Semester;
  showOptionalCourses?: boolean;
}

const Semester: React.FC<SemesterProps> = ({
  semesterData,
  showDetails = true,
  showOptionalCourses = false,
}) => {
  const classes = useStyles();
  const {
    name,
    courses,
    dates: { start, end },
  } = semesterData;

  const semDuration =
    start && end
      ? `${formatDate(start)} - ${formatDate(end)}`
      : 'Dates not set';
  const semProgress = calculateSemesterProgress(semesterData);
  const overDue = isOverDue(end, semProgress);

  return (
    <details open={showDetails} className={classes.root}>
      <summary>
        <span data-tip={semDuration}>
          {name}
          {overDue && <span className={classes.overDue}>overdue</span>}
        </span>
      </summary>
      {courses
        .filter((course) => showOptionalCourses || !course.isOptional)
        .map((course) => (
          <Course key={course.courseName} courseData={course} />
        ))}
    </details>
  );
};

export default Semester;
