import { render } from '@testing-library/react';
import { Spinner } from './Spinner';

it('testing Spinner', () => {
  const { getByText } = render(<Spinner />);

  const text = getByText(/Loading.../);
  expect(text).toBeInTheDocument();
});
