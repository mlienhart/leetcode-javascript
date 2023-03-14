/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  const letterA = "a";
  const letterB = "b";

  if (n % 2 !== 0) {
    return letterA.repeat(n);
  }

  return letterA.repeat(n - 1) + letterB;
};
