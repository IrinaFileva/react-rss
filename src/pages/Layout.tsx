import { FC } from 'react';
import { Outlet, redirect } from 'react-router-dom';
import { Paths } from 'shared/types/routerTypes';
import { Header } from 'widgets/Header/Header';

export const Layout: FC = () => {
  redirect(Paths.main);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
