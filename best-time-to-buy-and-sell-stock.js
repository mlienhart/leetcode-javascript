/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let a = 0;
    let b = prices[0];

    for (i = 0; i < prices.length; i++) {
        b = Math.min(prices[i], b);
        a = Math.max(a, prices[i] - b);
    }

    return a;
};