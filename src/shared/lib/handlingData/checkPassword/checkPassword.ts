import {
  RegExpLowercase,
  RegExpNumber,
  RegExpSpecialSymbols,
  RegExpUppercase,
} from 'shared/const';

export function checkPassword(value: string): number {
  let result = 0;
  if (RegExpNumber.test(value)) result += 0.25;
  if (RegExpUppercase.test(value)) result += 0.25;
  if (RegExpLowercase.test(value)) result += 0.25;
  if (RegExpSpecialSymbols.test(value)) result += 0.25;
  return result;
}
