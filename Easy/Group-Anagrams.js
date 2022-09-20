function groupAnagrams(strs) {
  let sortedStrings = {};

  strs.forEach((element, index) => {
    let sortedString = element.split("").sort().join("");
    if (sortedStrings.hasOwnProperty(sortedString)) {
      sortedStrings[sortedString].push(element);
    } else {
      sortedStrings[sortedString] = [element];
    }
  });

  return Object.values(sortedStrings);
}

function groupAnagrams(strs) {
  let sortedStrings = {};

  strs.forEach((str) => {
    let sortedString = str.split("").sort().join("");

    if (sortedString in sortedStrings) {
      sortedStrings[sortedString].push(str);
    } else {
      sortedStrings[sortedString] = [str];
    }
  });

  return Object.values(sortedStrings);
}
