import { CompletedFormsList } from 'features/showFormsData';
import { FC } from 'react';
import { Header } from 'widgets/Header/Header';

export const MainPage: FC = () => {
  return (
    <>
      <Header />
      <CompletedFormsList />
    </>
  );
};
