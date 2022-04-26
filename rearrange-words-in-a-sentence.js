/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
  let a = text
    .toLowerCase()
    .split(" ")
    .sort((a, b) => a.length - b.length);
  let b = a.slice(0, 1)[0].charAt(0).toUpperCase() + a.slice(0, 1)[0].slice(1);

  a.shift();
  a.unshift(b);

  return a.join(" ");
};
