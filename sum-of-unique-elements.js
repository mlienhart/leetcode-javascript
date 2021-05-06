/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let map = new Map();
    let arr = [];

    for (i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    for (i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) === 1) {
            arr.push(nums[i]);
        }
    }

    return arr.reduce((a, b) => a + b, 0);
};
