/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    i % m !== 0 ? (result += i) : (result -= i);
  }

  return result;
};
