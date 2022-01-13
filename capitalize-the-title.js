/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  return title
    .split(" ")
    .map((x) => x.toLowerCase())
    .map((x) => (x.length > 2 ? x.charAt(0).toUpperCase() + x.slice(1) : x))
    .join(" ");
};
