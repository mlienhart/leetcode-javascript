/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  const lessThanPivotList = [];
  const equalToPivotList = [];
  const greaterThanPivotList = [];

  for (let i = 0; i < nums.length; i++) {
    nums[i] < pivot
      ? lessThanPivotList.push(nums[i])
      : nums[i] === pivot
      ? equalToPivotList.push(nums[i])
      : greaterThanPivotList.push(nums[i]);
  }

  return [...lessThanPivotList, ...equalToPivotList, ...greaterThanPivotList];
};
