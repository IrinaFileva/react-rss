import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ThemeProvider } from 'app/providers/themeProvider';
import { StoreProvider } from 'app/providers/storeProvider';
import { Paths } from 'shared/types';
import './../app/styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (router.query.page && router.query.page[0] === Paths.pageParams)
      router.push(Paths.startPath);
  }, [router]);

  return (
    <StoreProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </StoreProvider>
  );
}
