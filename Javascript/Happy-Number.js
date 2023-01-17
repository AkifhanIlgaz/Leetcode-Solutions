function isHappy(n) {
  function sumOfSquares(n) {
    let result = 0;

    while (n !== 0) {
      let digit = n % 10;
      result += digit ** 2;
      n = n / 10;
    }

    return result;
  }

  let visited = new Set();

  while (!visited.has(n)) {
    visited.add(n);
    n = sumOfSquares(n);

    if (n === 1) {
      return true;
    }
  }

  return false;
}

