/**
 * @param {string[]} strs
 * @return {number}
 */
const minDeletionSize = (strs) => {
  let count = 0;

  for (index in strs[0]) {
    if (!isSorted(strs.map((s) => s[index]))) {
      count++;
    }
  }
  return count;
};

const isSorted = (str) => {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] > str[i + 1]) {
      return false;
    }
  }
  return true;
};

minDeletionSize(["cba", "daf", "ghi"]);
