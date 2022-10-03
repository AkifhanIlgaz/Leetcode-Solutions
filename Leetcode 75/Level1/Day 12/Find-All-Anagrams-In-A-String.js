/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 const findAnagrams = (s, p) => {
    if (p.length > s.length) return [];
  
    let pCount = new Map();
    let sCount = new Map();
  
    for (let index in p) {
      pCount.has(p[index]) ? pCount.set(p[index], pCount.get(p[index])+1) : (pCount.set(p[index],1));
      sCount.has(s[index]) ? sCount.set(s[index], sCount.get(s[index])+1) : (sCount.set(s[index],1));
    }
   
    let result = isSameMap(sCount,pCount) ? [0] : [];
    console.log(result)
    let left = 0;

    for ( let right = p.length; right < s.length; right++) {
        sCount.has(s[right]) ? sCount.set(s[right], sCount.get(s[right]) + 1) : sCount.set(s[right], 1);
        sCount.set(s[left], sCount.get(s[left]) - 1);

        if ( sCount.get(s[left]) == 0) {
            sCount.delete(s[left]);
        }

        left++;

        if (isSameMap(sCount, pCount)) {
            result.push(left);
        }
    }
    return result;
  }
  
  const isSameMap = (sMap, pMap) => {
    for ( let letter of pMap.keys()) {
        if( sMap.get(letter) !== pMap.get(letter)) {
            return false;
        }
    }

    return true;
  }
  
console.log(findAnagrams("cbaebabacd", "abc"))