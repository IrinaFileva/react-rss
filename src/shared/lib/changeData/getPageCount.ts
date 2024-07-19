export function getPageCount(totalCount: string | undefined): string[] {
  const moviesOnPage = 10;
  if (totalCount) {
    const total: number = Math.ceil(+totalCount / moviesOnPage);
    const arrayPage: string[] = Array(total)
      .fill(0)
      .map((_, i) => String(i + 1));
    return arrayPage;
  }
  return [];
}
