import { FC } from 'react';
import { useAppSelector } from 'shared/lib/hooks';
import { SaveFormData } from 'shared/types/formTypes';
import { getDataForms } from 'entities/DataForms';
import { Card } from 'shared/ui/Card';
import styles from './CompletedFormList.module.css';

export const CompletedFormsList: FC = () => {
  const { uncontrolledForm, hookForm, newForm } = useAppSelector(getDataForms);

  return (
    <main className={styles.main}>
      {uncontrolledForm.length <= 0 && hookForm.length <= 0 && (
        <h1 className={styles.notData}>No data to show</h1>
      )}
      {uncontrolledForm.length !== 0 && (
        <section className={styles.uncontrolledFormList}>
          <h2>Uncontrolled Form Data</h2>
          {uncontrolledForm.map((data: SaveFormData, index: number) => {
            return (
              <Card
                key={index}
                data={data}
                active={newForm === 'notHook' && index === 0}
              />
            );
          })}
        </section>
      )}
    </main>
  );
};
