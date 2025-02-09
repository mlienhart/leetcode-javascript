/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let currentDepth = 0;
  let highestDepth = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      currentDepth++;
      highestDepth = Math.max(currentDepth, highestDepth);
    }
    if (s[i] === ")") {
      currentDepth--;
    }
  }

  return highestDepth;
};
