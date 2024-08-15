import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Paths } from 'shared/types/routerTypes';
import './Header.css';

export const Header: FC = () => {
  return (
    <header>
      <NavLink
        className={({ isActive }) => (isActive ? 'link activeLink' : 'link')}
        to={Paths.main}
      >
        Main
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'link activeLink' : 'link')}
        to={Paths.uncontrolledForm}
      >
        Uncontrolled Form
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'link activeLink' : 'link')}
        to={Paths.hookForm}
      >
        Hook Form
      </NavLink>
    </header>
  );
};
