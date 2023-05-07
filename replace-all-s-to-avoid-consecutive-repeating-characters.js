/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  let result = s.split("");

  for (let i = 0; i < result.length; i++) {
    if (result[i] === "?" && result[i - 1] !== "a" && result[i + 1] !== "a") {
      result[i] = "a";
      continue;
    }
    if (result[i] === "?" && result[i - 1] !== "b" && result[i + 1] !== "b") {
      result[i] = "b";
      continue;
    }
    if (result[i] === "?") {
      result[i] = "c";
    }
  }

  return result.join("");
};
