function productExceptSelf(nums) {
  let result = new Array(nums.length);
  result = result.fill(1);

  let prefix = 1;

  for (let i = 0; i < result.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;

  for (let i = result.length - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }

  return result;

  //   let result = [];

  //   for (let index = 0; index < nums.length; index++) {
  //     let sum = 1;

  //     for (let i = 0; i < nums.length; i++) {
  //       if (index !== i) {
  //         sum *= nums[i];
  //       }
  //     }

  //     result.push(sum);
  //   }

  //   return result;
}


function productExceptSelf(nums) {
  
}