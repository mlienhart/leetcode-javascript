/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  nums.sort((a, b) => a - b);
  let a = [];
  let b = [...new Set([...nums])];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      a.push(nums[i]);
    }
  }

  if (b[0] !== 1) {
    a.push(1);
    return a;
  }

  for (let i = 0; i < b.length; i++) {
    if (b[i] + 1 !== b[i + 1]) {
      a.push(b[i] + 1);
      return a;
    }
  }

  return a;
};
