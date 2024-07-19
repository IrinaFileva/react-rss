import { FC, useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

export const Layout: FC = () => {
  const navigate = useNavigate();
  const { page } = useParams();

  useEffect(() => {
    if (!page) navigate('search/1');
  }, [page, navigate]);

  return <Outlet />;
};
