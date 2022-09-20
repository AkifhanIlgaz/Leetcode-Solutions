function longestConsecutive(nums) {
  // Without sorting , using set
  let numsSet = new Set(nums);

  let longestConsecutive = 0;

  for (let number of nums) {
    // Check if the number is the start of a sequence
    if (!numsSet.has(number - 1)) {
      let current = 0;
      while (numsSet.has(number + current)) {
        current++;
      }

      longestConsecutive = Math.max(longestConsecutive, current);
    }
  }

 // return longestConsecutive;

  // With sorting
  if (nums.length === 0) {
    return 0;
  }
  let longestConsecutive = 0;
  let current = 0;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      continue;
    }
    if (nums[i] + 1 === nums[i + 1]) {
      current++;
    } else {
      if (current > longestConsecutive) {
        longestConsecutive = current;
      }

      current = 0;
    }
  }
  return longestConsecutive + 1;
}
