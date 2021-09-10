/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  let a = 0;

  for (let i = 0; i < n / 2; i++) {
    a = a + n - (2 * i + 1);
  }

  return a;
};
