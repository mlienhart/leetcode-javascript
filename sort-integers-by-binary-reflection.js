/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortByReflection = function (nums) {
  return nums
    .map((x) => ({
      originalValue: x,
      mappedValue: parseInt(x.toString(2).split("").reverse().join(""), 2),
    }))
    .sort((a, b) => {
      if (a.mappedValue !== b.mappedValue) {
        return a.mappedValue - b.mappedValue;
      }
      return a.originalValue - b.originalValue;
    })
    .map((x) => x.originalValue);
};
