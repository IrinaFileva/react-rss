import { FC } from 'react';
import { Gender, InputName } from 'shared/types';
import { InputWrap } from 'shared/ui/InputWrap';

interface SelectGenderProps {
  name: keyof InputName;
  title: string;
  refs: React.MutableRefObject<HTMLSelectElement>;
  isValid: boolean;
  error?: string;
}

export const SelectGender: FC<SelectGenderProps> = ({
  name,
  title,
  refs,
  error,
  isValid,
}) => {
  return (
    <InputWrap name={name} title={title} error={error} isValid={isValid}>
      <select
        className={`selectForm ${isValid}`}
        ref={refs}
        id={name}
        defaultValue={'no-select'}
        autoComplete="on"
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
