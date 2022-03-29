/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
  let a = [];

  for (let i = s.charCodeAt(0); i <= s.charCodeAt(3); i++) {
    for (let j = s[1]; j <= s[4]; j++) {
      a.push(String.fromCharCode(i) + j);
    }
  }

  return a;
};
