/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  return s
    .split(" ")
    .map((x) => x.split("").reverse().join(""))
    .sort()
    .map((x) => x.split("").reverse().join(""))
    .join(" ")
    .replace(/[0-9]/g, "");
};
