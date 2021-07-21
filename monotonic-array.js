/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
    let b = 0;
    let c = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= nums[i + 1]) {
            b++;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= nums[i + 1]) {
            c++;
        }
    }

    return ((b === nums.length - 1) || (c === nums.length - 1));
};