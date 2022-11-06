/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  nums.forEach((x, i) => {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  });

  return [...nums.filter((x) => x !== 0), ...nums.filter((x) => x === 0)];
};
