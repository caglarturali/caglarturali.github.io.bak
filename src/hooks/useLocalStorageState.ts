import { useState, useEffect } from 'react';
import { LocalCache } from '../models';
import { buildRecordObject } from '../utils';

/**
 * Custom hook that uses local storage
 * @param key Key
 * @param defaultValue Default value
 */
export const useLocalStorageState = <T>(
  key: string,
  defaultValue: T,
): [
  LocalCache.Record<T>,
  React.Dispatch<React.SetStateAction<LocalCache.Record<T>>>,
] => {
  const [state, setState] = useState<LocalCache.Record<T>>(() => {
    const defaultObj = buildRecordObject(defaultValue);
    let value;

    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || JSON.stringify(defaultObj),
      ) as LocalCache.Record<T>;
    } catch (e) {
      value = defaultObj;
    }
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};
