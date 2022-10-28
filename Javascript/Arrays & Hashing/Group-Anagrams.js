/**
 *
 * @param {string[]} strs
 */
const groupAnagrams = (strs) => {
  let sortedStrings = new Map();

  strs.forEach((str) => {
    let sorted = str.split("").sort().join("");

    if (sortedStrings.has(sorted)) {
      const temp = sortedStrings.get(sorted);
      temp.push(str);
      sortedStrings.set(sorted, temp);
    } else {
      sortedStrings.set(sorted, [str]);
    }
  });

  return Array.from(sortedStrings.values());
  // return [...sortedStrings.values()]
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
