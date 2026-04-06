/**
 * @param {number[]} nums
 * @return {number}
 */
var minAbsoluteDifference = function (nums) {
  let minimumAbsoluteDifference = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      for (let j = 0; j < nums.length; j++) {
        if (nums[j] === 2) {
          minimumAbsoluteDifference = Math.min(
            minimumAbsoluteDifference,
            Math.abs(i - j),
          );
        }
      }
    }
  }

  return minimumAbsoluteDifference === Infinity
    ? -1
    : minimumAbsoluteDifference;
};
