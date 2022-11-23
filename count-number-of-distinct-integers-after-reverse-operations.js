/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
  const a = new Set(nums);

  for (const x of nums) {
    a.add(+x.toString().split("").reverse().join(""));
  }

  return a.size;
};
