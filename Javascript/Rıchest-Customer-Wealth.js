/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = (accounts) => {
  let maxwealth = 0;

  for (let account of accounts) {
    const wealth = account.reduce((acc, money) => acc + money);
    maxwealth = Math.max(wealth, maxwealth);
  }

  return maxwealth;
};
