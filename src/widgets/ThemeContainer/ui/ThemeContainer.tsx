import { FC, ReactNode } from 'react';
import { useTheme } from 'shared/lib/hooks';
import './ThemeContainer.css';

interface ThemeContainerProps {
  children: ReactNode;
}

export const ThemeContainer: FC<ThemeContainerProps> = ({ children }) => {
  const { theme } = useTheme();
  return <div className={`mainPage ${theme}`}>{children}</div>;
};
