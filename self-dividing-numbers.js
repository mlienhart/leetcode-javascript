/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let a = [];
  let b = [];

  for (let i = left; i <= right; i++) {
    a.push(i);
  }

  for (let i = 0; i < a.length; i++) {
    let c = `${a[i]}`.split("");
    let d = 0;
    for (let j = 0; j < c.length; j++) {
      if (a[i] % c[j] === 0) {
        d++;
      }
      if (c.length === d) {
        b.push(+c.join(""));
        d = 0;
      }
    }
  }

  return b;
};
