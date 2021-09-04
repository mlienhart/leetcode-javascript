/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  let a = text.split(" ");
  let b = [];

  for (let i = 0; i < a.length - 2; i++) {
    if (a[i] === first && a[i + 1] === second) {
      b.push(a[i + 2]);
    }
  }

  return b;
};
