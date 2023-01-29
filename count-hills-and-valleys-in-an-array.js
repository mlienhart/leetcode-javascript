/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = "";
    }
  }

  nums = nums.filter((x) => !!x);

  for (let i = 1; i < nums.length - 1; i++) {
    if (
      (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) ||
      (nums[i - 1] > nums[i] && nums[i] < nums[i + 1])
    ) {
      result++;
    }
  }

  return result;
};
