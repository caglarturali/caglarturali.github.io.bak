/**
 * Book component.
 */
import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BookTypes, DiplomaTypes, LocalCache } from '../../../../../../models';
import { useLocalStorageState } from '../../../../../../hooks';
import {
  buildRecordObject,
  getDetailsForIsbn,
  isRecordUsable,
} from '../../../../../../utils';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface BookProps {
  bookData: DiplomaTypes.Book;
}

const Book: React.FC<BookProps & LocalCache.Prop> = ({
  bookData,
  timeout = 1 * 60, // 1 hour
}) => {
  const classes = useStyles();
  const {
    isbn: [isbn10, isbn13],
    static: staticData,
    progress,
  } = bookData;

  const [isbnObjRecord, setIsbnObjRecord] = useLocalStorageState<
    BookTypes.ISBNObject | undefined
  >(isbn10, undefined);

  const isStatic = staticData !== undefined;

  useEffect(() => {
    const getData = async () => {
      const isbn = await getDetailsForIsbn(isbn13);
      setIsbnObjRecord(buildRecordObject(isbn));
    };

    if (!isStatic) {
      if (!isRecordUsable(isbnObjRecord, timeout)) {
        getData();
      }
    }
  });

  let titleFinal, thumbFinal, linkFinal;
  if (!isStatic && isbnObjRecord.data && isbnObjRecord.data.items) {
    // Extract from ISBNObject.
    const {
      volumeInfo: {
        title,
        subtitle,
        imageLinks: { thumbnail },
        canonicalVolumeLink,
      },
    } = isbnObjRecord.data.items[0];

    titleFinal = subtitle ? `${title}: ${subtitle}` : title;
    thumbFinal = thumbnail;
    linkFinal = canonicalVolumeLink;
  } else {
    // Use static data.
    titleFinal = staticData?.title || '[Book title not found]';
    thumbFinal = staticData?.thumbnail || 'https://via.placeholder.com/120x180';
    linkFinal = staticData?.link || '';
  }

  const thumbnailToolTip = `
    <div>
      <img
        src="${thumbFinal}" 
        alt="${titleFinal} book cover"
        aria-label="${titleFinal} book cover"
        />
    </div>
  `;

  return (
    <li className={classes.bookItem}>
      <span data-tip={`${progress}% done`}>
        <CircularProgressbar
          value={progress}
          className={classes.progress}
          strokeWidth={24}
        />
      </span>
      <a
        href={linkFinal}
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
