function reverse(x) {
  const max = 2 ** 31 - 1;
  const min = -(2 ** 31);

  let result = 0;

  while (x !== 0) {
    let digit = x % 10;
    x = Math.trunc(x / 10);

    if (result > max / 10 || (result == max / 10 && digit >= max % 10)) {
      return 0;
    }
    if (result < min / 10 || (result == min / 10 && digit <= min % 10)) {
      return 0;
    }

    result = result * 10 + digit;
  }
  return result;
}
