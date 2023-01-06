/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = 0;
  let lowestPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    lowestPrice = Math.min(prices[i], lowestPrice);
    result = Math.max(result, prices[i] - lowestPrice);
  }

  return result;
};
