/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
  let a = "";

  for (let i = 0; i < nums.length; i++) {
    a = nums[i][i] === "0" ? a + "1" : a + "0";
  }

  return a;
};
