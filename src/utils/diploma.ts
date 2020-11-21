import { DiplomaTypes } from '../models';

const progressAverage = (nums: number[], precision: number) => {
  const total = nums.reduce((prev, current) => prev + current, 0);
  return parseFloat((total / nums.length).toFixed(precision));
};

export const calculateSectionProgress = (
  section: DiplomaTypes.Section,
): number => {
  const {
    progress: { completed, total },
  } = section;
  return parseFloat(((completed / total) * 100).toFixed(0));
};

export const calculateCourseProgress = (
  course: DiplomaTypes.Course,
  precision = 0,
): number => {
  const { sections } = course;
  const progresses = sections.map(calculateSectionProgress);
  return progressAverage(progresses, precision);
};

export const calculateSemesterProgress = (
  semester: DiplomaTypes.Semester,
  precision = 0,
): number => {
  const { courses } = semester;
  const progresses = courses.map(calculateCourseProgress);
  return progressAverage(progresses, precision);
};

export const calculateDiplomaProgress = (
  diploma: DiplomaTypes.Curriculum,
  precision = 0,
): number => {
  const { semesters } = diploma;
  const progresses = semesters.map(calculateSemesterProgress);
  return progressAverage(progresses, precision);
};
