/**
 * Book component.
 */
import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { DiplomaTypes } from '../../../../../../models';
import booksData from '../../../../../../data/json/books.json';
import styles from './styles';
import { getReadingProgressForIsbn } from '../../../../../../api';

const useStyles = createUseStyles(styles);

export interface BookProps {
  courseBook: DiplomaTypes.CourseBook;
  onProgressChange?: (progress: DiplomaTypes.Progress) => void;
}

const Book: React.FC<BookProps> = ({ courseBook, onProgressChange }) => {
  const classes = useStyles();
  const {
    isbn: [isbn10, isbn13],
  } = courseBook;

  const [bookProgress, setBookProgress] = useState<number | undefined>(
    undefined,
  );

  const initProgress = () => {
    const getProgressData = async () => {
      const { progress = 0 } = await getReadingProgressForIsbn(isbn13);
      setBookProgress(progress);
      if (onProgressChange) {
        onProgressChange({
          isbn: courseBook.isbn,
          progress,
        });
      }
    };
    if (bookProgress === undefined) getProgressData();
  };

  useEffect(initProgress, []);

  const { title, subtitle, thumbnail, link } = booksData.find(
    (b) => b.isbn.includes(isbn10) || b.isbn.includes(isbn13),
  ) as DiplomaTypes.BookMetadata;

  const titleFinal = subtitle ? `${title}: ${subtitle}` : title;

  const thumbnailToolTip = `
    <div>
      <img
        src="${thumbnail}" 
        alt="${titleFinal} book cover"
        aria-label="${titleFinal} book cover"
        />
    </div>
  `;

  return (
    <li className={classes.bookItem}>
      <span data-tip={`${bookProgress}% done`}>
        <CircularProgressbar
          value={bookProgress || 0}
          className={classes.progress}
          strokeWidth={24}
        />
      </span>

      <a
        href={link}
        aria-label={titleFinal}
        data-html={true}
        data-tip={thumbnailToolTip}
        data-class={classes.toolTip}
        data-place="right"
        target="_blank"
        rel="noopener noreferrer"
      >
        {titleFinal}
      </a>
    </li>
  );
};

export default Book;
