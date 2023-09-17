/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "X") {
      result++;
      i = i + 2;
    }
  }

  return result;
};
