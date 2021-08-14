/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let a = [];

  for (let i = 0; i < arr.length - 1; i++) {
    a.push(Math.max(...arr.slice(i + 1)));
  }

  a.push(-1);

  return a;
};
