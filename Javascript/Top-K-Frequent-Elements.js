function topKFrequent(nums, k) {
  let count = {};

  nums.forEach((element) => {
    count.hasOwnProperty(element) ? count[element]++ : (count[element] = 1);
  });

  let sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(+sorted[i][0]);
  }
  return result;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));














function topKFrequent(nums,k) {
  
}
