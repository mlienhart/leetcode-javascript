/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
  let result = 2;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      result++;
    }
  }

  return result === 3;
};
