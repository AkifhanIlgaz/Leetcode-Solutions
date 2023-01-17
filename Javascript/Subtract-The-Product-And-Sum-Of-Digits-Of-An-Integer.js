/**
 *
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = (n) => {
  let [product, sum] = [1, 0];

  while (n >= 10) {
    let number = n % 10;
    product *= number;
    sum += number;

    n = Math.floor(n / 10);
  }

  return product * n - (sum + n);
};
