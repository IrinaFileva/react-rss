import { Movie } from 'shared/types';
import { getItemsForCsv } from './getItemsForCsv';
import { testMovie } from 'shared/test';

export const mockMovie: Movie[] = new Array(1).fill(testMovie);

const resultCsv =
  'data:text/csv;charset=utf-8,Title,Year,imdbID,Type,Poster%0ASuper%20Men,1978,123456,movie,https://www.kinopoisk.ru/picture/2836590/%20%0A';

test('testing getItemsForCsv', () => {
  const result = getItemsForCsv(mockMovie);
  expect(result).toStrictEqual(resultCsv);
});
