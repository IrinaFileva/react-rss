import { Movie } from 'shared/types';

export const getItemsForCsv = (movie: Movie[]) => {
  let result: string = '';

  const keys = Object.keys(movie[0]);

  result += `${keys}\n`;

  movie.forEach((key) => {
    const itemValues = Object.values(key);
    result += `${itemValues.join(',')} \n`;
  });

  const csvContent = 'data:text/csv;charset=utf-8,' + result;
  return encodeURI(csvContent);
};
