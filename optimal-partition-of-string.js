/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
  let set = new Set();
  let result = 1;

  for (const character of s) {
    if (set.has(character)) {
      set = new Set();
      result++;
    }
    set.add(character);
  }

  return result;
};
