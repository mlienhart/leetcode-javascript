/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function (n, t) {
  for (let i = n; i < n + 10; i++) {
    if (
      i
        .toString()
        .split("")
        .reduce((a, b) => +a * +b) %
        t ===
      0
    ) {
      return i;
    }
  }
};
