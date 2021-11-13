/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let a = [];

  for (let i = 0; i < nums1.length; i++) {
    let b = nums2.indexOf(nums1[i]);
    let c = false;
    for (let j = b + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        a.push(nums2[j]);
        c = true;
        break;
      }
    }
    if (c === false) {
      a.push(-1);
    }
  }

  return a;
};
