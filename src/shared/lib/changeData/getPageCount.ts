export function getPageCount(totalCount: string): string[] {
  const moviesOnPage = 10;
  const total: number = Math.ceil(+totalCount / moviesOnPage);
  const arrayPage: string[] = Array(total)
    .fill(0)
    .map((_, i) => String(i + 1));
  return arrayPage;
}
