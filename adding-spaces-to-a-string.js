/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
  const result = [];
  let increment = 0;

  for (let i = 0; i < s.length; i++) {
    if (i === spaces[increment]) {
      result.push(" ");
      increment++;
    }
    if (i !== spaces[increment]) {
      result.push(s[i]);
    }
  }

  return result.join("");
};
