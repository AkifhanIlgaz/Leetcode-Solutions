/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
const getHint = (secret, guess) => {
  let bulls = 0;
  let cows = 0;

  let nums = new Array(10).fill(0);

  for (let i = 0; i < secret.length; i++) {
    let s = +secret[i];
    let g = +guess[i];

    if (s == g) {
      bulls++;
    } else {
      if (nums[s]++ < 0) cows++;
      if (nums[g]-- > 0) cows++;
    }
  }

  return `${bulls}A${cows}B`;
};

console.log(getHint("1123", "0111"));
