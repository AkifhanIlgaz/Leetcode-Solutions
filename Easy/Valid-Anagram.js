function isAnagram(s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
}

function isAnagram(s, t) {
  // Count letter occurrences for each string and store them in separate objects or maps
  // Then, compare the objects
  if (s.length !== t.length) {
    return false;
  }

  let countS = {};
  let countT = {};

  for (let i = 0; i < s.length; i++) {
    countS.hasOwnProperty(s[i]) ? countS[s[i]]++ : (countS[s[i]] = 1);

    countT.hasOwnProperty(t[i]) ? countT[t[i]]++ : (countT[t[i]] = 1);
  }
  for (let letter in countS) {
    if (countS[letter] !== countT[letter]) {
      return false;
    }
  }

  return true;
}

isAnagram("anagram", "nagaram");
