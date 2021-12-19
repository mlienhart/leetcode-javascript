/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
  let a = s.split("");
  let b = [];
  let c = 0;

  for (let i = 0; i < a.length; i++) {
    if (i === spaces[c]) {
      b.push(" ");
      c++;
    }
    if (i !== spaces[c]) {
      b.push(a[i]);
    }
  }

  return b.join("");
};
