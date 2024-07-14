import { getSomePagination } from './getSomePagination';

const testArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const testCut = 3;
const testPage = 5;

const expectedResullt: number = 1;

const mockFn = {
  getPagination(array: string[], cut: number, page: number): number {
    const result: string[][] = [];
    let activePage: number = 0;
    for (let i = 0; i < array.length; i += cut) {
      result.push(array.slice(i, i + cut));
    }
    for (let j = 0; j < result.length; j++) {
      for (let k = 0; k < result[j].length; k++) {
        if (+result[j][k] === page) activePage += j;
      }
    }
    return activePage;
  },
};

test('testing getPageCount', () => {
  const result = getSomePagination(testArray, testCut, testPage);
  expect(result).toStrictEqual(expectedResullt);
});

test('testing sky function', () => {
  const resultSky = vi.spyOn(mockFn, 'getPagination');
  expect(resultSky).not.toHaveBeenCalled();

  mockFn.getPagination(testArray, testCut, testPage);

  expect(resultSky).toHaveBeenCalled();
});
