import { DiplomaTypes, LocalCache } from '../models';

export const collectBooks = (curriculum: DiplomaTypes.Curriculum) => {
  const books: DiplomaTypes.CourseBook[] = [];
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

export const createBookRecordKey = (isbn: string[]) => {
  const [, isbn13] = isbn;
  return `${isbn13}-progress`;
};

export const getBookProgressFromLocalStorage = (isbn: string[]) => {
  try {
    const record = JSON.parse(
      window.localStorage.getItem(createBookRecordKey(isbn)) || '',
    ) as LocalCache.Record<number>;
    return record.data || 0;
  } catch (error) {
    return 0;
  }
};

export const calculateCourseProgress = (course: DiplomaTypes.Course) => {
  const { books } = course;
  const highest = Math.max(
    ...books.map((b) => getBookProgressFromLocalStorage(b.isbn)),
  );
  return Math.min(highest, 100);
};

const progressAverage = (nums: number[], precision: number) => {
  const totalPercentage = nums.reduce((prev, current) => prev + current, 0);
  return parseFloat((totalPercentage / nums.length).toFixed(precision));
};

export const calculateSemesterProgress = (
  semester: DiplomaTypes.Semester,
  precision = 1,
) => {
  const { courses } = semester;
  const progresses = courses.map((c) => calculateCourseProgress(c));
  return progressAverage(progresses, precision);
};

export const calculateDiplomaProgress = (
  diplomaData: DiplomaTypes.Curriculum,
  precision = 1,
) => {
  const { terms } = diplomaData;
  const progresses = terms.map((t) => calculateSemesterProgress(t));
  return progressAverage(progresses, precision);
};
