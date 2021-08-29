/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  let a = "a";
  let b = "b";

  if (n % 2 !== 0) {
    return a.repeat(n);
  }

  return a.repeat(n - 1) + b;
};
