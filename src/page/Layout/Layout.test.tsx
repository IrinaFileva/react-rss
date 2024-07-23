import { render } from '@testing-library/react';
import { Layout } from './Layout';
import { BrowserRouter } from 'react-router-dom';

it('testing Layout Page', () => {
  render(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );

  expect(true).toBeTruthy();
});
