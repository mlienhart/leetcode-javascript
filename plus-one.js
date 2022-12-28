/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let a = BigInt(digits.join(""));

  return (++a).toString().split("").map(Number);
};
