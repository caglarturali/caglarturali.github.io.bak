/**
 * Course component.
 */
import React, { useMemo, useState } from 'react';
import { createUseStyles } from 'react-jss';
import ProgressBar from '../../../../../components/ProgressBar';
import { DetailsPanel, DiplomaTypes } from '../../../../../models';
import Section from './Section';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface CourseProps extends DetailsPanel {
  courseData: DiplomaTypes.Course;
}

const Course: React.FC<CourseProps> = ({ courseData, showDetails = false }) => {
  const classes = useStyles();
  const { courseName, sections } = courseData;

  const [sectionProgresses, setSectionProgresses] = useState<
    DiplomaTypes.Progress[]
  >([]);

  const handleProgressChange = (progress: DiplomaTypes.Progress) => {
    setSectionProgresses([
      ...sectionProgresses.filter((b) => b.title !== progress.title),
      progress,
    ]);
  };

  // Use the max value as the course progress!
  const courseProgress = useMemo(() => {
    if (sectionProgresses.length === 0) return 0;
    return (
      sectionProgresses.reduce((prev, current) => prev + current.progress, 0) /
      sectionProgresses.length
    );
  }, [sectionProgresses]);

  return (
    <details open={showDetails} className={classes.courseDetails}>
      <summary>
        <span>{courseName}</span>
        <ProgressBar value={courseProgress} />
      </summary>
      <div className={classes.bookPanel}>
        {sections.map((section) => (
          <Section
            key={section.title}
            section={section}
            onProgressChange={handleProgressChange}
          />
        ))}
      </div>
    </details>
  );
};

export default Course;
