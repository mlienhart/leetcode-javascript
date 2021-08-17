/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let a = [];
  let b = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        b++;
      }
      if (j === nums.length - 1) {
        a.push(b);
        b = 0;
      }
    }
  }

  return a;
};
