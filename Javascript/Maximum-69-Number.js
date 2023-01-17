/**
 *
 * @param {number} num
 * @return {number}
 */
const maximum69Number = (num) => {
  let temp = num.toString().split("");

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] !== "9") {
      temp[i] = "9";
      break;
    }
  }

  return +temp.join("");

  // return +num.toString().replace("6", "9");
};
