/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  let result = 0;

  for (let i = 0; i < n / 2; i++) {
    result = result + n - (2 * i + 1);
  }

  return result;
};
