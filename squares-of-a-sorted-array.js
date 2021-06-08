/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let a = [];

    for (i = 0; i < nums.length; i++) {
        a.push(nums[i] * nums[i]);
    }

    return a.sort((a, b) => a < b ? -1 : 1);
};