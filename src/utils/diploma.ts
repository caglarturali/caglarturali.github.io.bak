import { DiplomaTypes } from '../models';

export const calculateCourseProgress = (course: DiplomaTypes.Course) => {
  const { books } = course;
  const highest = Math.max(...books.map((b) => b.progress));
  return Math.min(highest, 100);
};

const progressAverage = (nums: number[], precision = 1) => {
  const totalPercentage = nums.reduce((prev, current) => prev + current, 0);
  return parseFloat((totalPercentage / nums.length).toFixed(precision));
};

export const calculateSemesterProgress = (semester: DiplomaTypes.Semester) => {
  const { courses } = semester;
  const progresses = courses.map((c) => calculateCourseProgress(c));
  return progressAverage(progresses);
};

export const calculateDiplomaProgress = (
  diplomaData: DiplomaTypes.Curriculum,
) => {
  const { terms } = diplomaData;
  const progresses = terms.map((t) => calculateSemesterProgress(t));
  return progressAverage(progresses);
};
