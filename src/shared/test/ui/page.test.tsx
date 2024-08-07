import { render, screen } from '@testing-library/react';
import { makeStore } from '_app/providers/storeProvider';
import Page from 'app/[search]/[[...page]]/page';
import { Provider } from 'react-redux';

const store = makeStore();

it('testing Page', async () => {
  const jsx = await Page({ params: { search: 'search', page: ['1'] } });
  render(<Provider store={store}>{jsx}</Provider>);

  const text = screen.getByText(/dark/);
  expect(text).toBeInTheDocument();
});
