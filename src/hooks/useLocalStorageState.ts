import { useState, useEffect } from 'react';

export const useLocalStorageState = <T>(
  key: string,
  defaultVal: T,
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [state, setState] = useState<T>(() => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultVal),
      ) as T;
    } catch (e) {
      value = defaultVal;
    }
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};
