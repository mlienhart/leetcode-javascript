/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
  let a = [...nums];

  for (let i = 0; i < nums.length; i++) {
    let b = +nums[i].toString().split("").reverse().join("");
    a.push(b);
  }

  return new Set(a).size;
};
