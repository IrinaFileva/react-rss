'use client';
import { FC } from 'react';
import styles from './Header.module.css';
import { SearchBar } from 'features/SearchMovie';
import { ButtonTheme } from 'features/ChangeApplicationTheme';
import { redirect, useParams } from 'next/navigation';
import { Paths } from 'shared/types';

export const Header: FC = () => {
  const params = useParams();
  const isPage = params ? params.page[0] === Paths.pageParams : false;

  if (isPage) redirect('/search/1');

  return (
    <header className={styles.header}>
      <SearchBar />
      <ButtonTheme />
    </header>
  );
};
