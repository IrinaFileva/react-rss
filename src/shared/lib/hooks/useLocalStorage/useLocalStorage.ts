import { useState } from 'react';
import { KEY_LS } from 'shared/constants';

export const useLocalStorage = (): [string, (value: string) => void] => {
  const [value, setValue] = useState<string>(
    localStorage.getItem(KEY_LS) || ''
  );

  const dataHandling = (data: string) => {
    setValue(data);
    localStorage.setItem(KEY_LS, data);
  };

  return [value, dataHandling];
};
