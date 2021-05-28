
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
    let a = [];
    let b = [];
    let c = [];

    for (i = 0; i < nums.length; i++) {
        nums[i] % 2 === 0 ? a.push(nums[i]) : b.push(nums[i]);
    }

    for (i = 0; i < a.length; i++) {
        c.push(a[i]);
        c.push(b[i]);
    }

    return c;
};