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
        .filter((x) => !!+x).length -
        b
          .toString(2)
          .split("")
          .filter((x) => !!+x).length || a - b
  );
};
