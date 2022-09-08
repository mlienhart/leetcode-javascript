/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const a = text.split("").filter((x) => x === "b").length;
  const b = text.split("").filter((x) => x === "a").length;
  const c = text.split("").filter((x) => x === "l").length / 2;
  const d = text.split("").filter((x) => x === "o").length / 2;
  const e = text.split("").filter((x) => x === "n").length;

  return Math.floor(Math.min(a, b, c, d, e));
};
