/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  return Math.max(...accounts.map((x) => x.reduce((a, b) => a + b)));
};
