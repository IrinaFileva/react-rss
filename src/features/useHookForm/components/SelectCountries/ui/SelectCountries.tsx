import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { getCountries } from 'entities/Countries';
import { useAppSelector } from 'shared/lib/hooks';
import { DataFormForHook, InputName } from 'shared/types';
import { InputWrap } from 'shared/ui/InputWrap';
import styles from './SelectCountries.module.css';

interface SelectCountriesProps {
  name: keyof InputName;
  title: string;
  register: UseFormRegister<DataFormForHook>;
  isValid: boolean;
  error?: string;
}

export const SelectCountries: FC<SelectCountriesProps> = ({
  name,
  title,
  register,
  error,
  isValid,
}) => {
  const countries = useAppSelector(getCountries);

  return (
    <InputWrap name={name} title={title} error={error} isValid={isValid}>
      <input
        placeholder="Select country"
        id={name}
        list={`${name}-list`}
        {...register(name)}
        autoComplete="on"
        className={`${styles.selectForm} ${styles[`${isValid}`]}`}
      />
      <datalist id={`${name}-list`} className={styles.dataList}>
        {countries.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </datalist>
    </InputWrap>
  );
};
