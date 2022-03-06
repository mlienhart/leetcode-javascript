/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let a = s.split("");
  let b = [];

  for (let i = 1; i < a.length; i++) {
    let x = a.slice(0, i).filter((x) => x === "0").length;
    let y = a.slice(i, Infinity).filter((x) => x === "1").length;
    b.push(x + y);
  }

  return Math.max(...b);
};
