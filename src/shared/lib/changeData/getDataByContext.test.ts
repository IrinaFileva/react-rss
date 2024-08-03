import { Context } from 'vm';
import { getDataByContext } from './getDataByContext';

const mockCxt: Context = {
  params: {
    search: 'men',
    page: ['2', '', 'id'],
  },
};

const mockResult = {
  search: 'men',
  page: '2',
  id: 'id',
};

const mockCxt1: Context = {
  params: {
    search: 'search',
  },
};

const mockResult1 = {
  search: 'new',
  page: '1',
  id: undefined,
};

test('testing getDataByContext', () => {
  const result = getDataByContext(mockCxt);
  expect(result).toStrictEqual(mockResult);

  const resultNew = getDataByContext(mockCxt1);
  expect(resultNew).toStrictEqual(mockResult1);
});
