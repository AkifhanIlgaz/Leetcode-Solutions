const sumSubarrayMins = function (A) {
  let stack = [];
  const left = [];
  const right = [];

  for (let i = 0; i < A.length; i++) {
    const num = A[i];
    let count = 1;
    while (stack.length && num <= stack[stack.length - 1][0]) {
      // NOTE <= 去重复
      count += stack.pop()[1];
    }
    stack.push([num, count]);
    left[i] = count;
  }
  stack = [];
  for (let i = A.length - 1; i >= 0; i--) {
    const num = A[i];
    let count = 1;
    while (stack.length && num < stack[stack.length - 1][0]) {
      // NOTE <
      count += stack.pop()[1];
    }
    stack.push([num, count]);
    right[i] = count;
  }
  const result = A.reduce((acc, num, i) => acc + num * (left[i] * right[i]), 0);
  return result % (10 ** 9 + 7);
};
