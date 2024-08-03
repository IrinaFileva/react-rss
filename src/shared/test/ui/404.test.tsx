import { render } from '@testing-library/react';
import NotFound from 'pages/404';

it('testing 404 page', () => {
  const { getByText } = render(<NotFound />);

  const text = getByText(/404/);
  expect(text).toBeInTheDocument();
});
