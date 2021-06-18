/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
    nums.sort((a, b) => a < b ? -1 : 1);
    let b = 0;

    for (i = 0; i < nums.length / 2; i++) {
        b = Math.max(b, nums[i] + nums[nums.length - i - 1]);
    }

    return b;
};