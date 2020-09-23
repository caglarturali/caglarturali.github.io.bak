/**
 * Sample usage:
 * pnpm run progress swe521 1 15
 */

import fs from 'fs';
import path from 'path';
import diplomaData from '../src/data/json/diploma.json';
import { execCommandsAndCommit } from './utils';

const srcPath = path.join(__dirname, '..', 'src');
const paths = {
  diploma: path.join(srcPath, 'data', 'json', 'diploma.json'),
  snapshots: path.join(srcPath, 'views', '__tests__', '__snapshots__'),
};

// Capture arguments
const [, , courseCodeArg, bookIndexArg, progressArg] = process.argv;
if (!(courseCodeArg && bookIndexArg && progressArg)) process.exit(1);

let message = '';

// Loop through terms and update target book's progress field
diplomaData.terms.forEach((term) => {
  term.courses.forEach((course) => {
    const { courseName, books } = course;
    const [coursePrefix, courseNum] = courseName.split(' ');
    const courseCode = (coursePrefix + courseNum).toLowerCase();

    // Update progress
    if (courseCode === courseCodeArg.toLowerCase()) {
      const book = books[parseInt(bookIndexArg)];

      if (!book) {
        console.log('Unable to locate book');
        process.exit(1);
      }

      message = `UPDATE: '${book.isbn[1]}' reading progress to: ${progressArg}%`;
      console.log(message);

      book.progress = parseInt(progressArg);
      return;
    }
  });
  if (message !== '') return;
});

if (message === '') {
  console.log('Unable to locate course/book');
  process.exit(1);
}

// Write back to file
fs.writeFileSync(paths.diploma, JSON.stringify(diplomaData, null, 2), {
  encoding: 'utf-8',
});

const commands = [
  'pnpm run test:update',
  `git add ${paths.diploma}`,
  `git add ${paths.snapshots}`,
];

execCommandsAndCommit(commands, message);
