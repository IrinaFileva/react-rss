import { createRemixStub } from '@remix-run/testing';
import { render, waitFor } from '@testing-library/react';
import MainPage, { loader } from 'app/routes/$search.$page';
import { testMoviesResponse } from '../mockData';
import { StoreProvider } from 'core/providers/storeProvider';

const MockMainPage = createRemixStub([
  {
    path: '/search/1',
    Component: MainPage,
    loader(): Awaited<ReturnType<typeof loader>> {
      return testMoviesResponse;
    },
  },
]);

it('testing MainPage', async () => {
  const { getByText } = render(
    <StoreProvider>
      <MockMainPage initialEntries={['/search/1']} />
    </StoreProvider>
  );

  await waitFor(() => {
    const title = getByText('Search');
    expect(title).toBeInTheDocument();
  });
});
