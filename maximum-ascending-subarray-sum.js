var maxAscendingSum = function (nums) {
  let a = nums[0];
  let b = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      a = 0;
    }
    a = a + nums[i];
    b = Math.max(b, a);
  }

  return b;
};
