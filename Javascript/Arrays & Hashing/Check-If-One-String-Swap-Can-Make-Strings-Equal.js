/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const areAlmostEqual = (s1, s2) => {
  const s1Array = new Array(26).fill(0);
  const s2Array = new Array(26).fill(0);

  let counter = 0;

  for (let i = 0; i < s1.length; i++) {
    let charS1 = s1[i];
    let charS2 = s2[i];

    if (charS1 !== charS2) {
      counter++;
    }

    if (counter > 2) return false;

    s1Array[charS1.charCodeAt(0) - "a".charCodeAt(0)]++;
    s2Array[charS2.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
 
  return s1Array.every((element, index) => element == s2Array[index]);
};
