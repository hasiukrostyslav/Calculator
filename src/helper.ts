export function SortDigit(digit: number[]): number[] {
  const digitData = digit.slice().reverse();

  return Array.from({ length: 4 }, () => [])
    .map(() => digitData.splice(0, 3).reverse())
    .flat();
}
