/**
 * Course component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import ProgressBar from '../../../../../components/ProgressBar';
import { DiplomaTypes } from '../../../../../models';
import Book from './Book';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface CourseProps {
  courseData: DiplomaTypes.Course;
}

const Course: React.FC<CourseProps> = ({ courseData }) => {
  const classes = useStyles();
  const { courseName, books } = courseData;

  const courseMaxProgress = Math.max(...books.map((b) => b.progress));

  return (
    <details open={false} className={classes.courseDetails}>
      <summary>
        <span>{courseName}</span>
        <ProgressBar value={courseMaxProgress} />
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
