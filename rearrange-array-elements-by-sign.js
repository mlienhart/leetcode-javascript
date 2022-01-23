/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  let a = nums.filter((x) => x > 0);
  let b = nums.filter((x) => x < 0);
  let c = [];

  for (let i = 0; i < nums.length / 2; i++) {
    c.push(a[i], b[i]);
  }

  return c;
};
