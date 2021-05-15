/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let a = nums.sort((a, b) => a < b ? -1 : 1);

    for (i = 0; i < a.length; i++) {
        if (a[i] === a[i + 1]) {
            return a[i];
        }
    }
};