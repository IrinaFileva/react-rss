import { FC } from 'react';
import svgSpinner from '../../../../assets/spinner.svg';
import './Spinner.css';

export const Spinner: FC = () => {
  return (
    <div className="spinner">
      <h2>Loading...</h2>
      <img src={svgSpinner} alt="spinner" width={250} height={250} />
    </div>
  );
};
