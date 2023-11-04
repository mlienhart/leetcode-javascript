/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const result = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    result.push(result[i - 1] + result[i - 2] + result[i - 3]);
  }

  return result[n];
};
