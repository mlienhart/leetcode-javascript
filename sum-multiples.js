/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      result.push(i);
    }
  }

  return result.reduce((a, b) => a + b, 0);
};
