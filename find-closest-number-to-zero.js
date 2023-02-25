/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
  const result = nums
    .map((x, i) => ({
      originalValue: nums[i],
      positiveValue: Math.abs(nums[i]),
    }))
    .sort((a, b) => (a.positiveValue > b.positiveValue ? 1 : -1));

  if (
    result[0]?.positiveValue === result[1]?.positiveValue &&
    result[0]?.originalValue < result[1]?.originalValue
  ) {
    return result[1].originalValue;
  } else {
    return result[0].originalValue;
  }
};
