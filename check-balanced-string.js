/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
  return (
    num
      .split("")
      .filter((x, i) => i % 2 === 0)
      .reduce((a, b) => +a + +b) ===
    num
      .split("")
      .filter((x, i) => i % 2 !== 0)
      .reduce((a, b) => +a + +b)
  );
};
