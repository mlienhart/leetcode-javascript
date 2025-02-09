/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  const sortedAscending = nums.toSorted((a, b) => a - b);
  const sortedDescending = nums.toSorted((a, b) => b - a);

  return (
    sortedDescending[0] * sortedDescending[1] -
    sortedAscending[0] * sortedAscending[1]
  );
};
