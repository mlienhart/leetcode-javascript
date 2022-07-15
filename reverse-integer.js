/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let a = Math.abs(x).toString().split("").reverse().join("");

  if (a > 2 ** 31) {
    return 0;
  }

  if (x > 0) {
    return +a;
  }

  return -a;
};
