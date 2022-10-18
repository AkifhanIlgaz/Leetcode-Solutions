/**
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  const firstnums1 = nums1.length > nums2.length;
  let myMap = new Map();
  if (firstnums1) {
    addToMap(myMap, nums1);
  } else {
    addToMap(myMap, nums2);
  }

  let result = [];
  if (firstnums1) {
    addToResult(result, myMap, nums2);
  } else {
    addToResult(result, myMap, nums1);
  }

  return result;
};

const addToMap = (Map, arr) => {
  arr.forEach((number) => {
    Map.has(number) ? Map.set(number, Map.get(number) + 1) : Map.set(number, 1);
  });
};

const addToResult = (result, myMap, arr) => {
  for (let number of arr) {
    if (myMap.has(number) && myMap.get(number) > 0) {
      myMap.set(number, myMap.get(number) - 1);
      result.push(number);
    }
  }
};
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
