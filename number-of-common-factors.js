/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
  let x = a < b ? a : b;
  let y = 0;

  for (let i = 1; i <= x; i++) {
    if (a % i === 0 && b % i === 0) {
      y++;
    }
  }

  return y;
};
