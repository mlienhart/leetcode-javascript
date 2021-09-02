/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let a = [...heights];
  let b = 0;

  heights.sort((a, b) => (a < b ? -1 : 1));

  for (let i = 0; i < heights.length; i++) {
    if (a[i] !== heights[i]) {
      b++;
    }
  }

  return b;
};
