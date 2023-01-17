function rob(nums) {
  let rob1 = 0,
    rob2 = 0;

  for (let n of nums) {
    let temp = Math.max(n + rob1, rob2);
    rob1 = rob2;
    rob2 = temp;
  }

  return rob2;
}

console.log(rob([1, 2, 3, 1]));
