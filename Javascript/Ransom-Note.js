/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  let mapRansom = {};
  for (let letter of ransomNote) {
    mapRansom.hasOwnProperty(letter)
      ? (mapRansom[letter] += 1)
      : (mapRansom[letter] = 1);
  }
  let mapMagazine = {};
  for (let letter of magazine) {
    mapMagazine.hasOwnProperty(letter)
      ? (mapMagazine[letter] += 1)
      : (mapMagazine[letter] = 1);
  }

  for (let letter in mapRansom) {
    if (
      mapMagazine[letter] == undefined ||
      mapRansom[letter] > mapMagazine[letter]
    ) {
      return false;
    }
  }

  return true;
};

console.log(canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi"));
