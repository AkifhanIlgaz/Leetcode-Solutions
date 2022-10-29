/**
 *
 * @param {number[]} salary
 * @return {number}
 */
const average = (salary) => {
  let [total, min, max] = [0, Number.MAX_VALUE, 0];

  for (let wage of salary) {
    total += wage;
    min = Math.min(wage, min);
    max = Math.max(wage, max);
  }

  return (total - (min + max)) / (salary.length - 2);
};
