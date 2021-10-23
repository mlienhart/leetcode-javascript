/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
  let a = s.split("");
  let b = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] === "X") {
      b++;
      i = i + 2;
    }
  }

  return b;
};
