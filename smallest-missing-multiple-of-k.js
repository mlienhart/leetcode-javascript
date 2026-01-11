/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function (nums, k) {
  const set = new Set(nums);

  for (let i = 1; i <= nums.length + 1; i++) {
    const currentMultiple = i * k;
    if (!set.has(currentMultiple)) {
      return currentMultiple;
    }
  }
};
