import { FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const Layout: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('search/1');
  }, [navigate]);

  return <Outlet />;
};
