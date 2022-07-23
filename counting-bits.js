/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let a = [];

  for (let i = 0; i <= n; i++) {
    a.push(
      i
        .toString(2)
        .split("")
        .filter((x) => x === "1").length
    );
  }

  return a;
};
