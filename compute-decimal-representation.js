/**
 * @param {number} n
 * @return {number[]}
 */
var decimalRepresentation = function (n) {
  n = n
    .toString()
    .split("")
    .map((x) => +x);

  for (let i = 0; i < n.length; i++) {
    n[i] = n[i] * 10 ** (n.length - i - 1);
  }

  return n.filter(Boolean);
};
