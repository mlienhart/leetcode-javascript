/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  const result = [];

  for (let i = 0; i < num.length; i++) {
    if (num[i] === num[i + 1] && num[i + 1] === num[i + 2]) {
      result.push(
        num
          .split("")
          .slice(i, i + 3)
          .join("")
      );
    }
  }

  return result.sort((a, b) => b - a)[0] ?? "";
};
