/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
  return Math.min(
    ...nums.map((x) =>
      x
        .toString()
        .split("")
        .reduce((a, b) => +a + +b)
    )
  );
};
