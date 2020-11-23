/**
 * Sample usage:
 * pnpm run progress swe513 0 1
 * pnpm run progress swe513 1 5/17
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
const [, , courseCodeArg, sectionIndexArg, progressArg] = process.argv;
if (!(courseCodeArg && sectionIndexArg && progressArg)) process.exit(1);

let message = '';

// Loop through terms and update target book's progress field
diplomaData.semesters.forEach((semester) => {
  semester.courses.forEach((course) => {
    const { courseName, sections } = course;
    const [coursePrefix, courseNum] = courseName.split(' ');
    const courseCode = (coursePrefix + courseNum).toLowerCase();

    // Update progress
    if (courseCode === courseCodeArg.toLowerCase()) {
      const section = sections[parseInt(sectionIndexArg)];

      if (!section) {
        console.log('Unable to locate section');
        process.exit(1);
      }

      let completed, total;
      if (progressArg.includes('/')) {
        // Get both values from the input.
        [completed, total] = progressArg.split('/').map((n) => parseInt(n));
      } else {
        // Use input as the value of 'completed'.
        completed = parseInt(progressArg);
        total = section.progress.total;
      }

      message = `UPDATE: '${section.title}' progress to: ${completed}/${total}`;
      console.log(message);

      section.progress = {
        completed,
        total,
      };
      return;
    }
  });
  if (message !== '') return;
});

if (message === '') {
  console.log('Unable to locate course/section');
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
