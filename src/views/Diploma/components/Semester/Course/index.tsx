/**
 * Course component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import ProgressBar from '../../../../../components/ProgressBar';
import { DetailsPanel, DiplomaTypes } from '../../../../../models';
import Book from './Book';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface CourseProps extends DetailsPanel {
  courseData: DiplomaTypes.Course;
  progress: number;
}

const Course: React.FC<CourseProps> = ({
  courseData,
  progress,
  showDetails = false,
}) => {
  const classes = useStyles();
  const { courseName, books } = courseData;

  return (
    <details open={showDetails} className={classes.courseDetails}>
      <summary>
        <span>{courseName}</span>
        <ProgressBar value={progress} />
      </summary>
      <div className={classes.bookPanel}>
        {books.map((book) => (
          <Book bookData={book} key={book.name} />
        ))}
      </div>
    </details>
  );
};

export default Course;
