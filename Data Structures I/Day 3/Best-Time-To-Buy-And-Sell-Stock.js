/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let minBuy = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - minBuy > maxProfit) {
      maxProfit = prices[i] - minBuy;
    }

    if (prices[i] < minBuy) {
      minBuy = prices[i];
    }
  }

  return maxProfit;
};
