// import 'dotenv/config';
import fs from 'fs/promises';
import path from 'path';
import { DiplomaTypes } from '../src/models';
import { getDetailsForIsbn } from '../src/api';
import { collectBooks } from '../src/utils';
import diplomaSWE from '../src/data/json/diploma_swe.json';
import booksStatic from './static.json';

const DATA_DIR = path.join(__dirname, '..', 'src', 'data', 'json');
const BOOKS_FILE_PATH = path.join(DATA_DIR, 'books.json');

const process = async (
  curriculum: DiplomaTypes.Curriculum,
  filePath: string,
) => {
  const books = collectBooks(curriculum);
  const booksData: DiplomaTypes.BookMetadata[] = [];

  const promises = books.map(async (book) => {
    const { isbn } = book;
    const [isbn10, isbn13] = isbn;

    const staticData = (booksStatic as DiplomaTypes.BookMetadata[]).find(
      (s) => s.isbn.includes(isbn10) || s.isbn.includes(isbn13),
    );

    if (staticData) {
      return {
        isbn,
        staticData,
      };
    }

    const data = await getDetailsForIsbn(isbn13);
    return {
      isbn,
      data,
    };
  });

  try {
    const results = await Promise.all(promises);
    for (const result of results) {
      const { isbn, data, staticData } = result;

      if (staticData) {
        booksData.push({
          ...staticData,
          isbn,
        });
      } else if (data && data.items) {
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
      } else {
        console.log(`Can not fetch data for: ${isbn}`);
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    // Sort books and write to file
    booksData.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    });
    fs.writeFile(filePath, JSON.stringify(booksData, null, 2));
  }
};

process(diplomaSWE as DiplomaTypes.Curriculum, BOOKS_FILE_PATH);
