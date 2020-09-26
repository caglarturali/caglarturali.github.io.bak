/**
 * Progress component.
 */
import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useLocalStorageState } from '../../../../../../../hooks';
import { LocalCache } from '../../../../../../../models';
import { isRecordUsable, buildRecordObject } from '../../../../../../../utils';
import { getReadingProgressForIsbn } from '../../../../../../../api';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface ProgressProps {
  isbn13: string;
}

const Progress: React.FC<ProgressProps & LocalCache.Prop> = ({
  isbn13,
  timeout = 1 * 60,
}) => {
  const classes = useStyles();

  const [progressRecord, setProgressRecord] = useLocalStorageState<
    number | undefined
  >(`${isbn13}-progress`, undefined);

  const initProgress = () => {
    const getProgressData = async () => {
      const p = await getReadingProgressForIsbn(isbn13);
      setProgressRecord(buildRecordObject(p));
    };

    if (!isRecordUsable(progressRecord, timeout)) {
      getProgressData();
    }
  };

  useEffect(initProgress, []);

  return (
    <span data-tip={`${progressRecord.data}% done`}>
      <CircularProgressbar
        value={progressRecord.data || 0}
        className={classes.progress}
        strokeWidth={24}
      />
    </span>
  );
};

export default Progress;
