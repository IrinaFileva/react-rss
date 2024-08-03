import { INITIAL_REQUEST } from 'shared/constants';
import { Context } from 'vm';

export function getDataByContext(cxt: Context) {
  const search: string =
    cxt.params.search !== 'search' ? cxt.params.search : INITIAL_REQUEST;
  const page: string = cxt.params.page ? cxt.params.page[0] : '1';
  const id: string | undefined = cxt.params.page
    ? cxt.params.page[2]
    : undefined;
  return { search: search, page: page, id: id };
}
