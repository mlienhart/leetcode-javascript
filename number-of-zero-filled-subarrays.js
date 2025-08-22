/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  let totalSubarrays = 0;
  let consecutiveZeros = 0;

  for (const number of nums) {
    number === 0
      ? (consecutiveZeros++,
        (totalSubarrays = totalSubarrays + consecutiveZeros))
      : (consecutiveZeros = 0);
  }

  return totalSubarrays;
};
