/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (
      i ===
      nums.map((x) =>
        x
          .toString()
          .split("")
          .map((x) => +x)
          .reduce((a, b) => a + b)
      )[i]
    ) {
      return i;
    }
  }

  return -1;
};
