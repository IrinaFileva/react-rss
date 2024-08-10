import StoreProvider from './StoreProvider';
import { ThemeProvider } from '_app/providers/themeProvider';
import './../_app/styles/global.css';
import { Metadata } from 'next';
import { ThemeContainer } from 'widgets/ThemeContainer';

export const metadata: Metadata = {
  title: 'Movies',
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ThemeProvider>
            <ThemeContainer>{children}</ThemeContainer>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
