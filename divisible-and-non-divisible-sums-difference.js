/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
  let firstResult = 0;
  let secondResult = 0;

  for (let i = 1; i <= n; i++) {
    i % m !== 0 ? (firstResult += i) : (secondResult += i);
  }

  return firstResult - secondResult;
};
