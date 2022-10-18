function isUgly(n) {
  if (n <= 0) {
    return false;
  }

  let ourPrimes = [2, 3, 5];

  for (prime of ourPrimes) {
    while (n % prime === 0) {
      n = Math.floor(n / prime);
    }
  }

  return n === 1;
}
