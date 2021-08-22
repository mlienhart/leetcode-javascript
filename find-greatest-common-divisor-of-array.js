/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  let a = nums.map((x) => x).sort((a, b) => (a < b ? -1 : 1));
  let b = nums.map((x) => x).sort((a, b) => (a > b ? -1 : 1));
  let c = a[0];
  let d = b[0];

  for (let i = c; i >= 0; i--) {
    if (c % i === 0 && d % i === 0) {
      return i;
    }
  }
};
