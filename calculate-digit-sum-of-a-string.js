/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
  while (s.length > k) {
    const result = [];

    for (let i = 0; i < s.length; i = i + k) {
      let sum = s
        .slice(i, i + k)
        .split("")
        .reduce((a, b) => +a + +b, 0);
      result.push(sum);
    }

    s = result.join("");
  }

  return s;
};
