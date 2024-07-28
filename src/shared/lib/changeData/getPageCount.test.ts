import { getPageCount } from './getPageCount';

const testData: string = '10';

const expectedResullt: string[] = ['1'];

test('testing getPageCount', () => {
  const result = getPageCount(testData);
  expect(result).toStrictEqual(expectedResullt);
});

test('testing getPageCount if the argument is undefined', () => {
  const result = getPageCount(undefined);
  expect(result).toStrictEqual([]);
});
