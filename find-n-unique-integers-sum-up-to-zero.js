/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  const result = [];

  if (n % 2 !== 0) {
    result.push(0);
  }

  for (let i = 0; i < Math.floor(n / 2); i++) {
    result.push(i + 1, -(i + 1));
  }

  return result;
};
