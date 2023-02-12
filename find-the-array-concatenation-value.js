/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
  const result = [];
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    if (nums.length === 1) {
      result.push(nums[0].toString());
      break;
    }
    if (nums.length === 0) {
      break;
    }
    result.push(nums[0].toString() + nums[nums.length - 1].toString());
    nums.shift();
    nums.pop();
  }

  return result.length === 1 ? +result : result.reduce((a, b) => +a + +b);
};
