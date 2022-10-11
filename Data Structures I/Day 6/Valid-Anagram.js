/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length !== t.length) {
  return false;
}

let mapS = {};
let mapT = {};

for (let i = 0; i < s.length; i++) {
  mapS.hasOwnProperty(s[i]) ? mapS[s[i]]++ : (mapS[s[i]] = 1);
  mapT.hasOwnProperty(t[i]) ? mapT[t[i]]++ : (mapT[t[i]] = 1);
}

for (letter in mapS) {
  if (mapS[letter] !== mapT[letter]) {
    return false;
  }
}

return true;
}
 
