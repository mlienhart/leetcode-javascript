/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {
    let a = 1000;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            a = Math.min(a, Math.abs(i - start));
        }
    }

    return a;
};