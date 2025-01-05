/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  const result = [];

  for (let i = 1; i < s.length; i++) {
    result.push(
      s
        .split("")
        .slice(0, i)
        .filter((x) => x === "0").length +
        s
          .split("")
          .slice(i)
          .filter((x) => x === "1").length
    );
  }

  return Math.max(...result);
};
