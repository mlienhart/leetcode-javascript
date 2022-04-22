/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
  while (s.length > k) {
    let a = [];

    for (let i = 0; i < s.length; i = i + k) {
      let b = s.slice(i, i + k);
      let c = b.split("").reduce((a, b) => +a + +b, 0);
      a.push(c);
    }

    s = a.reduce((a, b) => a.toString() + b.toString());
  }

  return s;
};
