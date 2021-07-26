/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let a = 0;
  let b = 0;
  let c = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") {
      a++;
    }
    if (s[i] === "R") {
      b++;
    }
    if (a === b) {
      c++;
    }
  }

  return c;
};
