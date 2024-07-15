import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'app/App';

test('testing incoming data', () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const title = getByText('Sorry.. there was an error');
  expect(title).toBeInTheDocument();
});
