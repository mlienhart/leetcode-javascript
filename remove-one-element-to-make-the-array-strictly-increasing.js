/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
  let a = [];

  for (let i = 0; i < nums.length; i++) {
    a.push([...nums.slice(0, i), ...nums.slice(i + 1)]);
  }

  for (let i = 0; i < a.length; i++) {
    if ([...new Set(a[i])].sort((a, b) => a - b).join("") === a[i].join("")) {
      return true;
    }
  }

  return false;
};
