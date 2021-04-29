/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let a = nums.sort((a, b) => a > b ? -1 : 0);
    return (a[0] - 1) * (a[1] - 1);
};