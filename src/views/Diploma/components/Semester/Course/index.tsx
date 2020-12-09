/**
 * Course component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
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
  const { courseName, sections } = courseData;

  const courseProgress = calculateCourseProgress(courseData);
  const courseProgressText = `${courseProgress}% done`;

  return (
    <details open={showDetails} className={classes.courseDetails}>
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
