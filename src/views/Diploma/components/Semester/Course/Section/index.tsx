/**
 * Section component.
 */
import React, { useEffect, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { DiplomaTypes } from '../../../../../../models';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface SectionProps {
  section: DiplomaTypes.Section;
  onProgressChange?: (progress: DiplomaTypes.Progress) => void;
}

const Section: React.FC<SectionProps> = ({ section, onProgressChange }) => {
  const classes = useStyles();
  const { title, url, completed } = section;

  // eslint-disable-next-line
  const thumbnailToolTip = `
    <div>
      <img
        src=""
        alt=""
        aria-label=""
        />
    </div>
  `;

  const progress: number = useMemo(() => (completed ? 100 : 0), [completed]);
  const progressText = `${progress}% done`;

  const informProgressChange = () => {
    if (onProgressChange) {
      onProgressChange({
        title,
        progress,
      });
    }
  };

  useEffect(informProgressChange, []);

  return (
    <li className={classes.bookItem}>
      <span data-tip={progressText}>
        <CircularProgressbar
          value={progress}
          className={classes.progress}
          strokeWidth={24}
        />
      </span>

      <a
        href={url}
        aria-label={title}
        // data-html={true}
        // data-tip={thumbnailToolTip}
        data-class={classes.toolTip}
        data-place="right"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    </li>
  );
};

export default Section;
