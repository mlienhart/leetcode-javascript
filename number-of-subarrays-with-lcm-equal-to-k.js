/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayLCM = function (nums, k) {
  let a = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      let b = nums.slice(i, j + 1);
      let c = b.every((x) => k % x === 0);
      let d = b.some((x) => x === k);
      if (c && d) {
        a++;
      }
    }
  }

  return a;
};
