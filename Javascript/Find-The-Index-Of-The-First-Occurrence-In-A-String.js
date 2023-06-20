/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const lenNeedle = needle.length;
  const firstLetter = needle[0];

  for (let i = 0; i <= haystack.length - lenNeedle; i++) {
    if (
      haystack[i] == firstLetter &&
      haystack.slice(i, i + lenNeedle) == needle
    ) {
      return i;
    }
  }

  return -1;
  //   return haystack.indexOf(needle);
};
