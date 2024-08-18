import { FC } from 'react';
import { useAppSelector } from 'shared/lib/hooks';
import { InputName } from 'shared/types';
import { InputWrap } from 'shared/ui/InputWrap';
import { getCountries } from 'entities/Countries';

interface SelectCountriesProps {
  name: keyof InputName;
  title: string;
  refs: React.MutableRefObject<HTMLInputElement>;
  isValid: boolean;
  error?: string;
}

export const SelectCountries: FC<SelectCountriesProps> = ({
  name,
  title,
  refs,
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
        ref={refs}
        autoComplete="on"
        className={`selectForm ${isValid}`}
      />
      <datalist id={`${name}-list`} className="dataList">
        {countries.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </datalist>
    </InputWrap>
  );
};
