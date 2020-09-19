import { BookTypes } from '../models';

export const getDetailsForIsbn = async (isbn: string) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
  );
  return (await response.json()) as BookTypes.ISBNObject;
};
