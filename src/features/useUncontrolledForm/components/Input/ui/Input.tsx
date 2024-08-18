import { FC, useState } from 'react';
import { InputName } from 'shared/types/InputTypes';
import { InputWrap } from 'shared/ui/InputWrap';
import { checkPassword } from 'shared/lib/handlingData';
import styles from './Input.module.css';

interface InputProps {
  refs: React.MutableRefObject<HTMLInputElement>;
  name: keyof InputName;
  type: string;
  isValid: boolean;
  title: string;
  error?: string;
}

export const Input: FC<InputProps> = ({
  name,
  type,
  title,
  error,
  refs,
  isValid,
}) => {
  const [value, setValue] = useState<string>('');

  return (
    <InputWrap name={name} title={title} error={error} isValid={isValid}>
      <input
        ref={refs}
        id={name}
        type={type}
        placeholder={title}
        className={`${styles.inputForm} ${styles[`${isValid}`]}`}
        autoComplete="on"
        onChange={(e) => setValue(e.target.value)}
      />
      {name === 'pass' && checkPassword(value) !== 1 && (
        <progress
          className={styles.progressBar}
          value={checkPassword(value)}
          max={1}
        />
      )}
      {name === 'pass' && checkPassword(value) === 1 && (
        <h3 className={styles.passwordTitle}>The password is strong</h3>
      )}
    </InputWrap>
  );
};
