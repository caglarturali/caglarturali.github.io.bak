import dayjs from 'dayjs';

/**
 * Formats date string.
 * @param isoDate Date in ISO8601 format
 * @param formatStr Format string. Defaults to DD/MM/YYYY.
 * @returns Formatted date
 */
export const formatDate = (isoDate: string, formatStr = 'DD/MM/YYYY') => {
  return dayjs(isoDate).format(formatStr);
};

/**
 * Determines if the due date for the semester is passed or not.
 * @param endDate End date for the semester.
 * @param progress Progress percentage. Use whole number.
 */
export const isOverDue = (endDate: string, progress: number): boolean => {
  const now = dayjs();
  const end = dayjs(endDate);
  return now.isAfter(end) && progress !== 100;
};
