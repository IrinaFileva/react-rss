import { FC } from 'react';
import { InputName } from 'shared/types/InputTypes';
import { InputWrap } from '../InputWrap';
import './Input.css';

interface InputProps {
  name: keyof InputName;
  type: string;
  title?: string;
  pattern?: string;
  autocomplete?: string;
  error?: string;
}

export const Input: FC<InputProps> = ({
  name,
  type,
  pattern,
  autocomplete,
  title,
  error,
}) => {
  return (
    <InputWrap name={name} title={title} error={error}>
      <input
        name={name}
        type={type}
        pattern={pattern}
        placeholder={title}
        autoComplete={autocomplete}
        className="inputForm"
      ></input>
    </InputWrap>
  );
};
