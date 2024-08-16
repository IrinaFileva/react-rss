import { FC, useState } from 'react';
import { InputName, LabelTitle } from 'shared/types/InputTypes';
import { InputWrap } from '../../InputWrap';
import { checkPassword } from 'shared/lib/handlingData';
import './Input.css';

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
        className={`inputForm ${isValid}`}
        autoComplete="false"
        onChange={(e) => setValue(e.target.value)}
      />
      {name === 'pass' &&
        title !== LabelTitle.confirmPass &&
        checkPassword(value) !== 1 && (
          <progress
            className="progressBar"
            value={checkPassword(value)}
            max={1}
          />
        )}
      {checkPassword(value) === 1 && (
        <h3 className="passwordTitle">The password is strong</h3>
      )}
    </InputWrap>
  );
};
