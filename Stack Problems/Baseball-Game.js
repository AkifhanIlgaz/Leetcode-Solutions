/**
 * @param {string[]} operations
 * @return {number}
 */

const calPoints = (operations) => {
  let calStack = []; // Stack implementation

  for (record of operations) {
    switch (record) {
      case "+":
        calStack.push(
          calStack[calStack.length - 1] + calStack[calStack.length - 2]
        );
        break;
      case "D":
        calStack.push(calStack[calStack.length - 1] * 2);
        break;
      case "C":
        calStack.pop();
        break;
      default:
        calStack.push(+record);
        break;
    }
  }

  return calStack.length > 0
    ? calStack.reduce((acc, element) => acc + element)
    : 0;
};
