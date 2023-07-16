var maxAscendingSum = function (nums) {
  let sum = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      sum = 0;
    }
    sum = sum + nums[i];
    result = Math.max(result, sum);
  }

  return result;
};
