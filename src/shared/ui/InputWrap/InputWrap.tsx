import { FC, ReactNode } from 'react';
import { InputName } from 'shared/types/InputTypes';
import styles from './InputWrap.module.css';

interface WrapProps {
  children: ReactNode;
  name: keyof InputName;
  title?: string;
  error?: string;
}

export const InputWrap: FC<WrapProps> = ({ children, name, title, error }) => {
  return (
    <div className={styles.inputFormWrapper}>
      <div className={styles.labelSpanWrap}>
        <label htmlFor={name} className={styles.labelForm}>
          {title}
        </label>
        <span className={styles.hintErrorForm}>{error && `*${error}`}</span>
      </div>
      {children}
    </div>
  );
};
