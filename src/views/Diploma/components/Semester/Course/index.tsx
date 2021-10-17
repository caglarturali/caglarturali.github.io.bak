/**
 * Course component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import ProgressBar from '../../../../../components/ProgressBar';
import { DetailsPanel, DiplomaTypes } from '../../../../../models';
import { calculateCourseProgress } from '../../../../../utils';
import Section from './Section';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface CourseProps extends DetailsPanel {
  courseData: DiplomaTypes.Course;
}

const Course: React.FC<CourseProps> = ({ courseData, showDetails = false }) => {
  const classes = useStyles();
  const { courseName, sections, isOptional } = courseData;

  const courseProgress = calculateCourseProgress(courseData);
  let courseProgressText = `${courseProgress}% done`;
  isOptional &&
    (courseProgressText = `Optional Content: ${courseProgressText}`);

  return (
    <details
      open={showDetails}
      className={clsx(classes.courseDetails, {
        [classes.optional]: isOptional,
      })}
    >
      <summary>
        <span data-tip={courseProgressText}>{courseName}</span>
        <ProgressBar value={courseProgress} />
      </summary>
      <div className={classes.bookPanel}>
        {sections.map((section) => (
          <Section key={section.title} section={section} />
        ))}
      </div>
    </details>
  );
};

export default Course;
