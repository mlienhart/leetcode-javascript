/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let a = new Set(nums1);
    let b = new Set();

    for (let i = 0; i < nums2.length; i++) {
        if (a.has(nums2[i])) {
            b.add(nums2[i]);
        }
    }

    return [...b];
};