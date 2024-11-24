/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  return Math.floor(
    Math.min(
      text.split("").filter((x) => x === "b").length,
      text.split("").filter((x) => x === "a").length,
      text.split("").filter((x) => x === "l").length / 2,
      text.split("").filter((x) => x === "o").length / 2,
      text.split("").filter((x) => x === "n").length
    )
  );
};
