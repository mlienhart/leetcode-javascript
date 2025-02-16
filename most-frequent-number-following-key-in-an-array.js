/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function (nums, key) {
  const counts = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key) {
      counts[nums[i + 1]] = counts[nums[i + 1]] ? counts[nums[i + 1]] + 1 : 1;
    }
  }

  return +Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
};
