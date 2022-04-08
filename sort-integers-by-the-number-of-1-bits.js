/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  return arr.sort(
    (a, b) =>
      a
        .toString(2)
        .split("")
        .filter((x) => x === "1").length -
        b
          .toString(2)
          .split("")
          .filter((x) => x === "1").length || a - b
  );
};
