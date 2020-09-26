import { LocalCache } from '../models';

/**
 * Builds a record object by attaching necessary field(s)
 * @param data Data to store
 */
export const buildRecordObject = <T>(data: T) => {
  return {
    data,
    lastChecked: Date.now(),
  } as LocalCache.Record<T>;
};

/**
 * Returns true if the record has expired
 * otherwise returns false
 * @param record Local storage record
 * @param timeout Timeout in minutes
 */
export const isRecordExpired = <T>(
  record: LocalCache.Record<T>,
  timeout: number,
) => {
  return Date.now() > record.lastChecked + timeout * 60 * 1000;
};

/**
 * Returns true if the record is "usable"
 * otherwise returns false
 * @param record Local storage record
 * @param timeout Timeout in minutes
 */
export const isRecordUsable = <T>(
  record: LocalCache.Record<T>,
  timeout: number,
) => {
  return record.data !== undefined && !isRecordExpired(record, timeout);
};
