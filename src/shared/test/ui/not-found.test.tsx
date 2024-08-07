import { render } from '@testing-library/react';
import NotFound from 'app/not-found';

it('testing Not Found', () => {
  const { getByText } = render(<NotFound />);

  const text = getByText(/Movies Not Found/);
  expect(text).toBeInTheDocument();
});
