/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function (s, k) {
  let result = 0;

  for (let i = 0; i <= s.length - 1; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const listOfOnes = s
        .slice(i, j)
        .split("")
        .filter((x) => x === "0");
      const listOfZeros = s
        .slice(i, j)
        .split("")
        .filter((x) => x === "1");
      if (listOfOnes.length <= k || listOfZeros.length <= k) {
        result++;
      }
    }
  }

  return result;
};
