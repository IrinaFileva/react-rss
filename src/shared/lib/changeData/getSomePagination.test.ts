import { getSomePagination } from './getSomePagination';

const testArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const testCut = 3;
const testPage = 5;

const expectedResullt: number = 1;

test('testing getPageCount', () => {
  const result = getSomePagination(testArray, testCut, testPage);
  expect(result).toStrictEqual(expectedResullt);
});
