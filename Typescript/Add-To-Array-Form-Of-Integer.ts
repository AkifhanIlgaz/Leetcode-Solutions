export {};

function addToArrayForm(num: number[], k: number): number[] {
  num.reverse();
  let i = 0;

  while (k > 0) {
    const digit = k % 10;
    i < num.length ? (num[i] += digit) : num.push(digit);

    const carry = Math.floor(num[i] / 10);
    num[i] %= 10;

    k = Math.floor(k / 10);
    k += carry;
    i++;
  }

  return num.reverse();
}
