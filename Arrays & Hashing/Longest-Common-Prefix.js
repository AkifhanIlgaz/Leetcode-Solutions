/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = (strs) => {
  let longestCommonPrefix = strs[0];

  for (let str of strs) {
    let commonPrefix = "";
    for (let i = 0; i < str.length; i++) {
      if (longestCommonPrefix[i] === str[i]) {
        commonPrefix += str[i];
        continue;
      } else {
        break;
      }
    }

    longestCommonPrefix = commonPrefix;
  }

  return longestCommonPrefix;
};
