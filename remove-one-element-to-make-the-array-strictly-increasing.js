/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    result.push([...nums.slice(0, i), ...nums.slice(i + 1)]);
  }

  for (let i = 0; i < result.length; i++) {
    if (
      [...new Set(result[i])].sort((a, b) => a - b).join("") ===
      result[i].join("")
    ) {
      return true;
    }
  }

  return false;
};
