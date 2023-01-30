/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
  const result = new Set(nums);

  for (const number of nums) {
    result.add(+number.toString().split("").reverse().join(""));
  }

  return result.size;
};
