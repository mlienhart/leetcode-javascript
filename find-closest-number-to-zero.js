/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
  let a = nums
    .map((x, i) => ({ b: nums[i], c: Math.abs(nums[i]) }))
    .sort((a, b) => (a.c > b.c ? 1 : -1));

  if (a[0]?.c === a[1]?.c && a[0]?.b < a[1]?.b) {
    return a[1].b;
  } else {
    return a[0].b;
  }
};
