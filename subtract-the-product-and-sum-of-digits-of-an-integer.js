/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  return (
    Array.from(String(n), Number).reduce((a, b) => a * b) -
    Array.from(String(n), Number).reduce((a, b) => a + b)
  );
};
