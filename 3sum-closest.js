/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let a = [];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        a.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  return (b = a.reduce((a, b) =>
    Math.abs(b - target) < Math.abs(a - target) ? b : a
  ));
};
