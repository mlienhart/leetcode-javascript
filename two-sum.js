/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let a = [];

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        a.push(i);
        a.push(j);
        return a;
      }
    }
  }
};
