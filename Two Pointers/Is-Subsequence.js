/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isSubsequence = (s, t) => {
  let sPointer = 0;
  let tPointer = 0;

  while (tPointer < t.length) {
    if (s[sPointer] == t[tPointer]) {
      sPointer++;
    }
    tPointer++;
  }

  return sPointer >= s.length;
};
