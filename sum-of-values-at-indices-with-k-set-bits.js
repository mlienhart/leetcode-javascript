/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
  return nums
    .map((x, i) => ({
      key: x,
      value: i
        .toString(2)
        .split("")
        .map((x) => +x)
        .filter((x) => Boolean(x)),
    }))
    .filter((x) => x.value.length === k)
    .map((x) => x.key)
    .reduce((a, b) => a + b, 0);
};
