/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
    nums.sort((a, b) => a < b ? -1 : 1);
    let a = 0;

    for (let i = 0; i < nums.length / 2; i++) {
        a = Math.max(a, nums[i] + nums[nums.length - i - 1]);
    }

    return a;
};