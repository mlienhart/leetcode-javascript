/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
  let a = time.split("");

  if (a[0] === "?") {
    a[0] = a[1] > 3 ? "1" : "2";
  }
  if (a[1] === "?") {
    a[1] = a[0] > 1 ? "3" : "9";
  }
  if (a[3] === "?") {
    a[3] = "5";
  }
  if (a[4] === "?") {
    a[4] = "9";
  }

  return a.join("");
};
