import { SaveFormData } from 'shared/types/formTypes';
import styles from './Card.module.css';
import { FC } from 'react';

type CardProps = {
  data: SaveFormData;
  active: boolean;
};

export const Card: FC<CardProps> = ({ data, active }) => {
  return (
    <div className={active ? `${styles.card} ${styles.active}` : styles.card}>
      <img className={styles.cardImg} src={data.file} alt="img" />
      <div className={styles.data}>
        <p>Name: {data.name}</p>
        <p>Age: {data.age}</p>
        <p>Email: {data.email}</p>
        <p>Password: {data.pass}</p>
        <p>Confirm Password: {data.confirmPass}</p>
        <p>Gender: {data.gender}</p>
        <p>Country: {data.country}</p>
        <p>
          Terms accepted: <input type="checkbox" checked={data.tc} />
        </p>
      </div>
    </div>
  );
};
