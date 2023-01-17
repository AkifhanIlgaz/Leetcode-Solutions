const evalRPN = (tokens) => {
  const stack = [];

  for (const token of tokens) {
    if (token === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (token === "-") {
      const [secondOperand, firstOperand] = [stack.pop(), stack.pop()];
      stack.push(firstOperand - secondOperand);
    } else if (token === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (token === "/") {
      const [secondOperand, firstOperand] = [stack.pop(), stack.pop()];
      stack.push(Math.trunc(firstOperand / secondOperand));
    } else {
      stack.push(parseInt(token));
    }
  }
  return stack[0];
};
