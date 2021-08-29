/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let a = s
    .split("")
    .sort((a, b) => (a > b ? 1 : -1))
    .join();
  let b = t
    .split("")
    .sort((a, b) => (a > b ? 1 : -1))
    .join();

  return a === b;
};
