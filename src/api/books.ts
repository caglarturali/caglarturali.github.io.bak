import { API } from '../models';

/**
 * Returns details of the given book from Google Books API.
 * @param isbn ISBN(13) of the book
 */
export const getDetailsForIsbn = async (
  isbn: string,
): Promise<API.ISBNObject> => {
  const { REACT_APP_BOOKS_API_KEY } = process.env;

  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${REACT_APP_BOOKS_API_KEY}`,
  );
  return await response.json();
};

/**
 * Returns reading progress from Reading Progress API.
 * @param isbn ISBN(13) of the book
 */
export const getReadingProgressForIsbn = async (
  isbn: string,
): Promise<API.ReadingProgressResponse> => {
  const response = await fetch(
    `https://reading-progress.vercel.app/api/isbn/${isbn}`,
  );
  return await response.json();
};
