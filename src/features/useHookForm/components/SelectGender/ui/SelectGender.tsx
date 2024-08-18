import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Gender, InputName } from 'shared/types/InputTypes';
import { InputWrap } from 'shared/ui/InputWrap';
import styles from './SelectGender.module.css';
import { DataFormForHook } from 'shared/types';

interface SelectCountriesProps {
  name: keyof InputName;
  title: string;
  register: UseFormRegister<DataFormForHook>;
  isValid: boolean;
  error?: string;
}

export const SelectGender: FC<SelectCountriesProps> = ({
  name,
  title,
  register,
  error,
  isValid,
}) => {
  return (
    <InputWrap name={name} title={title} error={error} isValid={isValid}>
      <select
        className={`${styles.selectForm} ${styles[`${isValid}`]}`}
        {...register(name)}
        id={name}
        autoComplete="on"
        defaultValue={'no-select'}
      >
        <option value="no-select" disabled>
          Select gender
        </option>
        <option value={Gender.man}>{Gender.man}</option>
        <option value={Gender.woman}>{Gender.woman}</option>
      </select>
    </InputWrap>
  );
};
