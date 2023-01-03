/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  /* 
  One character always maps to the same character
  
        "foo"   "bar"
        f => b               b => f
        o => a               a => o   
        o => r               r => o
    */

  let [mapS2T, mapT2S] = [new Map(), new Map()];

  for (let i = 0; i < s.length; i++) {
    let [char1, char2] = [s[i], t[i]];

    if (
      (mapS2T.has(char1) && mapS2T.get(char1) !== char2) ||
      (mapT2S.has(char2) && mapT2S.get(char2) !== char1)
    ) {
      return false;
    }

    mapS2T.set(char1, char2);
    mapT2S.set(t[i], s[i]);
  }
  return true;
};
