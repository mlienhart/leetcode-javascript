/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  let a = [];
  let b = num.split("");

  for (let i = 0; i < b.length; i++) {
    if (b[i] === b[i + 1] && b[i + 1] === b[i + 2]) {
      a.push(b.slice(i, i + 3).join(""));
    }
  }

  return a.sort((a, b) => b - a)[0] ?? "";
};
