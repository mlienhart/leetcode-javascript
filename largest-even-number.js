/**
 * @param {string} s
 * @return {string}
 */
var largestEven = function (s) {
  return s.slice(0, s.lastIndexOf("2") + 1);
};
