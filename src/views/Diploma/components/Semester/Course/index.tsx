/**
 * Course component.
 */
import React, { useMemo, useState } from 'react';
import { createUseStyles } from 'react-jss';
import ProgressBar from '../../../../../components/ProgressBar';
import { DetailsPanel, DiplomaTypes } from '../../../../../models';
import Book from './Book';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface CourseProps extends DetailsPanel {
  courseData: DiplomaTypes.Course;
}

const Course: React.FC<CourseProps> = ({ courseData, showDetails = false }) => {
  const classes = useStyles();
  const { courseName, books } = courseData;

  const [bookProgresses, setBookProgresses] = useState<DiplomaTypes.Progress[]>(
    [],
  );

  const handleBookProgressChange = (progress: DiplomaTypes.Progress) => {
    setBookProgresses([...bookProgresses, progress]);
  };

  // Use the max value as the course progress!
  const courseProgress = useMemo(() => {
    if (bookProgresses.length === 0) return 0;
    return Math.max(...bookProgresses.map((p) => p.progress));
  }, [bookProgresses]);

  return (
    <details open={showDetails} className={classes.courseDetails}>
      <summary>
        <span>{courseName}</span>
        <ProgressBar value={courseProgress} />
      </summary>
      <div className={classes.bookPanel}>
        {books.map((book) => (
          <Book
            key={book.isbn[0]}
            courseBook={book}
            onProgressChange={handleBookProgressChange}
          />
        ))}
      </div>
    </details>
  );
};

export default Course;
