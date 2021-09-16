/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let a = [];

  for (let x of s) {
    a[a.length - 1] === x ? a.pop() : a.push(x);
  }

  return a.join("");
};
