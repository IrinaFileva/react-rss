import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import NotFound from './NotFound';

it('testing Not Found Page', () => {
  const { getByText } = render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );
  const title = getByText('404');
  expect(title).toBeInTheDocument();
});
