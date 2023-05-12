/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  const maximumValue = nums.sort((a, b) => `${b}${a}` - `${a}${b}`).join("");

  return +maximumValue > 0 ? maximumValue : "0";
};
