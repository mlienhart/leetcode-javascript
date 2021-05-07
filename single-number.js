/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let map = new Map();

    for (i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    for ([key, value] of map.entries()) {
        if (value === 1) {
            return key;
        }
    }
};