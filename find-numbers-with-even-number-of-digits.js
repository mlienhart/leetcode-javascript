/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    let a = 0;

    for (i = 0; i < nums.length; i++) {
        if (nums[i].toString().length % 2 === 0) {
            a++;
        }
    }

    return a;
};