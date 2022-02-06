/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
  let a = [];
  let b = [];
  let c = [];

  for (let i = 0; i < nums.length; i++) {
    i % 2 === 0 ? a.push(nums[i]) : b.push(nums[i]);
  }

  a.sort((a, b) => a - b);
  b.sort((a, b) => b - a);

  for (let i = 0; i < nums.length / 2; i++) {
    if (a[i]) {
      c.push(a[i]);
    }
    if (b[i]) {
      c.push(b[i]);
    }
  }

  return c;
};
