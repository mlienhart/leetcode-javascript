/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let a = 0;
  let b = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      a++;
      b = Math.max(a, b);
    }
    if (s[i] === ")") {
      a--;
    }
  }

  return b;
};
