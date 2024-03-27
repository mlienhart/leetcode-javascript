/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  const result = [];

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        result.push(nums1[i]);
      }
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    for (let j = 0; j < nums3.length; j++) {
      if (nums2[i] === nums3[j]) {
        result.push(nums2[i]);
      }
    }
  }

  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      if (nums3[i] === nums1[j]) {
        result.push(nums3[i]);
      }
    }
  }

  return [...new Set([...result])];
};
