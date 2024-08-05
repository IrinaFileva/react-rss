import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ThemeProvider } from 'app/providers/themeProvider';
import { StoreProvider } from 'app/providers/storeProvider';
import { Paths } from 'shared/types';
import './../app/styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isSearch = router.query.search === Paths.errorPaths;

  useEffect(() => {
    if (isSearch) router.push(Paths.startPath);
  }, [router, isSearch]);

  return (
    <StoreProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </StoreProvider>
  );
}
