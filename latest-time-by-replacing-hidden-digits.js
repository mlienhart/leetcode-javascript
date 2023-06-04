/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
  let result = time.split("");

  if (result[0] === "?") {
    result[0] = result[1] > 3 ? "1" : "2";
  }
  if (result[1] === "?") {
    result[1] = result[0] > 1 ? "3" : "9";
  }
  if (result[3] === "?") {
    result[3] = "5";
  }
  if (result[4] === "?") {
    result[4] = "9";
  }

  return result.join("");
};
