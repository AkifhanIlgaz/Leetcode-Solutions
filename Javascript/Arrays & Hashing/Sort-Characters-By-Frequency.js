/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = function (s) {
  stringAsObj = {};

  for (let item of s) {
    if (!stringAsObj[item]) stringAsObj[item] = 0;
    stringAsObj[item]++;
  }

  let sortedString = Object.keys(stringAsObj).sort(function (a, b) {
    return stringAsObj[b] - stringAsObj[a];
  });

  let result = "";
  for (let item of sortedString) {

    result = result + item.repeat(stringAsObj[item]);
  }

  return result;
};
