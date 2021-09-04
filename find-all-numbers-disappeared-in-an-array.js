/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let a = [...new Set([...nums].sort((a, b) => (a < b ? -1 : 1)))];
  let b = [];
  let c = [];

  for (let i = 1; i <= nums.length; i++) {
    if (i !== a[i - 1]) {
      b.push(i);
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (!a.includes(b[i])) {
      c.push(b[i]);
    }
  }

  return c;
};
