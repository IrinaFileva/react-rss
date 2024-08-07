import type { AppProps } from 'next/app';
import { ThemeProvider } from 'app/providers/themeProvider';
import { StoreProvider } from 'app/providers/storeProvider';
import './../app/styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </StoreProvider>
  );
}
