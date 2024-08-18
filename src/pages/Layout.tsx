import { FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Paths } from 'shared/types/routerTypes';

export const Layout: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(Paths.main);
  }, [navigate]);

  return <Outlet />;
};
