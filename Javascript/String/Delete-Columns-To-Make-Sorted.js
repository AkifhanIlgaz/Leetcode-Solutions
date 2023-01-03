/**
 * @param {string[]} strs
 * @return {number}
 */
const minDeletionSize = (strs) => {
  let deleteCount = 0;

  for (index in strs[0]) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[i].charCodeAt(index) < strs[i - 1].charCodeAt(index)) {
        deleteCount++;
        break;
      }
    }
  }

  return deleteCount;
};
