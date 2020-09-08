/**
 * Book component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { DiplomaTypes } from '../../../../../../models/DiplomaTypes';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface BookProps {
  bookData: DiplomaTypes.Book;
}

const Book: React.FC<BookProps> = ({ bookData }) => {
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { name, url, coverImg, startDate, endDate, progress } = bookData;

  const toolTip = `
    <div>
      <img
        src="${coverImg}" 
        alt="${name} book cover"
        aria-label="${name} book cover"
        />
    </div>
  `;

  return (
    <li className={classes.bookItem} key={name}>
      <a
        href={url}
        aria-label={name}
        data-html={true}
        data-tip={toolTip}
        data-class={classes.toolTip}
        data-place="right"
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </a>
    </li>
  );
};

export default Book;
