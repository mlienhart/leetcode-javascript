/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let a = [...new Set(nums)];

    return a.length === nums.length ? false : true;
};