import { getPageCount } from './getPageCount';

const testData: string = '10';

const expectedResullt: string[] = ['1'];

test('testing getPageCount', () => {
  const result = getPageCount(testData);
  expect(result).toStrictEqual(expectedResullt);
});
