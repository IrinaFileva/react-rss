import { renderHook } from '@testing-library/react';
import { useGetMoviesQuery } from './getMoviesList';
import { Provider } from 'react-redux';
import { store } from 'app/providers/storeProvider';
import type { ReactNode } from 'react';

export function Wrapper(props: { children: ReactNode }) {
  return <Provider store={store}>{props.children}</Provider>;
}

it('testing renders hook in createApi', () => {
  renderHook(() => useGetMoviesQuery({ title: 'men', page: 1 }), {
    wrapper: Wrapper,
  });
});
