/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let a = s.split("");
  let b = [];
  let c = [];

  for (let i = 0; i < s.length - 9; i++) {
    b.push(a.slice(i, i + 10).join(""));
  }

  b.sort((a, b) => (a > b ? 1 : -1));

  for (let i = 0; i < b.length; i++) {
    if (b[i] === b[i + 1]) {
      c.push(b[i]);
    }
  }

  return [...new Set(c)];
};
