export function addDigits(num: number): number {
  if (num < 10) return num;

  return addDigits(sumOfDigits(num));
}

function sumOfDigits(num: number): number {
  let sum: number = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
}
