import { BrowserRouter } from 'react-router-dom';
import { NotFound } from './NotFound';
import { render } from '@testing-library/react';

it('testing Not Found Page', () => {
  const { getByText } = render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );
  const title = getByText('404');
  expect(title).toBeInTheDocument();
});
