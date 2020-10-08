import 'dotenv/config';
import fs from 'fs/promises';
import path from 'path';
import { DiplomaTypes } from '../src/models';
import { getDetailsForIsbn } from '../src/api';
import diplomaData from '../src/data/json/diploma.json';

const DATA_DIR = path.join(__dirname, '..', 'src', 'data', 'json');
const BOOKS_FILE_PATH = path.join(DATA_DIR, 'books.json');

const collectBooks = (curriculum: DiplomaTypes.Curriculum) => {
  const books: DiplomaTypes.BookEntry[] = [];
  const { terms, extras } = curriculum;

  // Main books
  for (const term of terms) {
    const { courses } = term;
    for (const course of courses) {
      books.push(...course.books);
    }
  }

  // Extras
  for (const extra of extras) {
    books.push(...extra.books);
  }

  return books;
};

const process = async (
  curriculum: DiplomaTypes.Curriculum,
  filePath: string,
) => {
  const books = collectBooks(curriculum);
  const booksData: DiplomaTypes.BookMetadata[] = [];

  const promises = books.map(async (book) => {
    const {
      isbn: [, isbn13],
      static: staticData,
    } = book;

    if (staticData) {
      return {
        isbn: isbn13,
        staticData,
      };
    }

    const data = await getDetailsForIsbn(isbn13);
    return {
      isbn: isbn13,
      data,
    };
  });

  try {
    const results = await Promise.all(promises);
    for (const result of results) {
      const { isbn, data, staticData } = result;

      if (staticData) {
        booksData.push({
          ...(staticData as DiplomaTypes.BookMetadata),
          isbn,
        });
      } else if (data) {
        const {
          volumeInfo: {
            title,
            subtitle,
            imageLinks: { thumbnail },
            canonicalVolumeLink,
          },
        } = data.items[0];

        // Attach to the object
        booksData.push({
          isbn,
          title,
          subtitle,
          thumbnail,
          link: canonicalVolumeLink,
        });
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    // Write to file
    fs.writeFile(filePath, JSON.stringify(booksData, null, 2));
  }
};

process(diplomaData as DiplomaTypes.Curriculum, BOOKS_FILE_PATH);
