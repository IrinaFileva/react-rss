import { FC, ReactNode } from 'react';
import { InputName } from 'shared/types/InputTypes';
import './InputWrap.css';

interface WrapProps {
  children: ReactNode;
  name: keyof InputName;
  title: string;
  isValid: boolean;
  error?: string;
}

export const InputWrap: FC<WrapProps> = ({
  children,
  name,
  title,
  isValid,
  error,
}) => {
  return (
    <div className="inputFormWrapper">
      <div className="labelSpanWrap">
        <label htmlFor={name} className="labelForm">
          {title}
        </label>
        {!isValid && (
          <span className="hintErrorForm">{error && `*${error}`}</span>
        )}
      </div>
      {children}
    </div>
  );
};
