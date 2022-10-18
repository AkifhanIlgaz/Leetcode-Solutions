function maxProfit(prices) {
  let maxProfit = 0;
  let minBuyPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - minBuyPrice > maxProfit) {
      maxProfit = prices[i] - minBuyPrice;
    } else if (prices[i] < minBuyPrice) {
      minBuyPrice = prices[i];
    }
  }

  return maxProfit;
}
