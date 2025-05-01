/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  return names
    .map((x, i) => [x, heights[i]])
    .sort((a, b) => b[1] - a[1])
    .map((x) => x[0]);
};
