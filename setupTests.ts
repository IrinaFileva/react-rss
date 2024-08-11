import '@testing-library/jest-dom';
import React from 'react';
import { vi } from 'vitest';

global.React = React;

vi.mock('@remix-run/react', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@remix-run/react')>();
  const useParams = vi.fn().mockImplementation(() => {
    return {
      search: 'search',
      page: ['1'],
    };
  });
  return {
    ...actual,
    useParams,
  };
});
