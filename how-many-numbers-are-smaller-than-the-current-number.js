/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const result = [];
  let increment = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        increment++;
      }
      if (j === nums.length - 1) {
        result.push(increment);
        increment = 0;
      }
    }
  }

  return result;
};
