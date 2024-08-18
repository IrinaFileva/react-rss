import { InputWrap } from 'shared/ui/InputWrap';
import { FC, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { DataFormForHook, InputName } from 'shared/types';
import { checkPassword } from 'shared/lib/handlingData';
import styles from './Input.module.css';

interface InputProps {
  type: string;
  name: keyof InputName;
  title: string;
  isValid: boolean;
  register: UseFormRegister<DataFormForHook>;
  error?: string;
}

export const Input: FC<InputProps> = ({
  type,
  name,
  title,
  isValid,
  register,
  error,
}) => {
  const [value, setValue] = useState<string>('');

  return (
    <InputWrap name={name} title={title} isValid={isValid} error={error}>
      <input
        className={styles.inputForm}
        type={type}
        placeholder={title}
        {...register(name)}
        id={name}
        onInput={(e) => setValue(e.currentTarget.value)}
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
