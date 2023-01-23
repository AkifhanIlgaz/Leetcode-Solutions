/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const trustedBy = Array(n + 1).fill(0);
  for (const [a, b] of trust) {
    trustedBy[a] = NaN; // since the judge doesn't trust anyone, a[i] can't be the judge
    trustedBy[b]++; // ++ applied to NaN is still NaN, and won't amount to n-1
  }
  // Because trust pairs are unique, there can be only one judge, or none at all.
  return trustedBy.indexOf(n - 1) || 1;
};
