/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let a = BigInt(digits.join(""));
  let b = ++a;
  let c = `${b}`;

  return c.split("").map((x) => +x);
};
