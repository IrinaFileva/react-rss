export function getSomePagination(
  array: string[],
  cut: number,
  page: number
): number {
  const result: string[][] = [];
  for (let i = 0; i < array.length; i += cut) {
    result.push(array.slice(i, i + cut));
  }
  for (let j = 0; j < result.length; j++) {
    for (let k = 0; k < result[j].length; k++) {
      if (+result[j][k] === page) return j;
    }
  }
  return 0;
}
