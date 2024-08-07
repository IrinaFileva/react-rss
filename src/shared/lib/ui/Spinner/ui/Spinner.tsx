import { FC } from 'react';
import styles from './Spinner.module.css';

export const Spinner: FC = () => {
  return (
    <div className={styles.spinner}>
      <h2 className={styles.title}>Loading...</h2>
      <div className={styles.spinnerImg}></div>
    </div>
  );
};
