import { FC, useEffect, useState } from 'react';
import { getError } from 'shared/lib/getError';
import { Gender, InputName } from 'shared/types/InputTypes';
import { schema } from 'shared/types/validationSchema';
import { InputWrap } from '../../InputWrap';

interface SelectGenderProps {
  name: keyof InputName;
  title: string;
  refs: React.MutableRefObject<HTMLSelectElement>;
  error?: string;
}

export const SelectGender: FC<SelectGenderProps> = ({
  name,
  title,
  refs,
  error,
}) => {
  const [err, setErr] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    if (error) {
      setErr(error);
    } else {
      setErr('');
    }
  }, [error]);

  const onChange = async () => {
    try {
      const value = { [name]: refs.current.value };
      await schema.validateAt(name, value, { abortEarly: false });
      setErr('');
      setIsValid(true);
    } catch (e) {
      setErr(getError(e));
      setIsValid(false);
    }
  };

  return (
    <InputWrap name={name} title={title} error={err} isValid={isValid}>
      <select
        className="selectForm"
        ref={refs}
        onChange={onChange}
        id={name}
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
