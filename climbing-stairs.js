/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const result = [0, 1, 2, 3];

  for (let i = 4; i <= n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result[n];
};
