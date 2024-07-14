export function getSomePagination(
  array: string[],
  cut: number,
  page: number
): number {
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
}
