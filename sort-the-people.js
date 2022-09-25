/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  let a = [];
  names.forEach((x, i) => a.push({ a: names[i], b: heights[i] }));
  return a.sort((a, b) => b.b - a.b).map((x) => x.a);
};
