/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  let a = -1;

  for (const b of nums) {
    let c = nums.find((x) => x === -b);
    if (c > a) {
      a = c;
    }
  }

  return a;
};
