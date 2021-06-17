/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    let a = nums.sort((a, b) => `${b}${a}` - `${a}${b}`).join("");
    return a > 0 ? a : "0";
};