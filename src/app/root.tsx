import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
  useParams,
  useRouteError,
} from '@remix-run/react';
import { StoreProvider } from 'core/providers/storeProvider';
import { ThemeProvider } from 'core/providers/themeProvider';
import '../core/styles/global.css';
import { useEffect } from 'react';
import NotFound from 'page/NotFound/NotFound';

export default function Root() {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(params).length === 0) {
      navigate('/search/1');
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
        <Links />
        <Meta />
      </head>
      <body>
        <ThemeProvider>
          <StoreProvider>
            <Outlet />
          </StoreProvider>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <html lang="en">
        <head>
          <link rel="icon" href="./favicon.ico" />
          <Links />
          <Meta />
        </head>
        <body>
          <NotFound />
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    );
  }
}
