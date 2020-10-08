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

  const [courseProgress, setCourseProgress] = useState<DiplomaTypes.Progress[]>(
    [],
  );

  const handleCourseProgressChange = (progress: DiplomaTypes.Progress) => {
    setCourseProgress([...courseProgress, progress]);
  };

  const courseProgressAverage = useMemo(() => {
    if (courseProgress.length === 0) return 0;

    const totalProgress = courseProgress.reduce(
      (prev, current) => prev + current.progress,
      0,
    );
    return totalProgress === 0
      ? 0
      : parseFloat((totalProgress / courseProgress.length).toFixed(1));
  }, [courseProgress]);

  return (
    <details open={showDetails} className={classes.courseDetails}>
      <summary>
        <span>{courseName}</span>
        <ProgressBar value={courseProgressAverage} />
      </summary>
      <div className={classes.bookPanel}>
        {books.map((book) => (
          <Book
            key={book.isbn[0]}
            courseBook={book}
            onProgressChange={handleCourseProgressChange}
          />
        ))}
      </div>
    </details>
  );
};

export default Course;
