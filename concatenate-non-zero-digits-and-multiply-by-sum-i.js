/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function (n) {
  const result = n
    .toString()
    .split("")
    .map((x) => +x)
    .filter(Boolean);

  return +result.join("") * result.reduce((a, b) => a + b, 0);
};
