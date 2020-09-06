/**
 * Course component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { DiplomaTypes } from '../../../../../models';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface CourseProps {
  courseData: DiplomaTypes.Course;
}

const Course: React.FC<CourseProps> = ({ courseData }) => {
  const classes = useStyles();
  const { courseName, books } = courseData;

  const renderBook = (book: DiplomaTypes.Book) => {
    return (
      <li className={classes.bookItem} key={book.name}>
        <a href={book.url}>{book.name}</a>
      </li>
    );
  };

  return (
    <details open={false} className={classes.courseDetails}>
      <summary>{courseName}</summary>
      <div className={classes.bookPanel}>{books.map((b) => renderBook(b))}</div>
    </details>
  );
};

export default Course;
