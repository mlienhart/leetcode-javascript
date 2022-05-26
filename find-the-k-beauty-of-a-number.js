/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  let a = 0;
  let b = num.toString();

  for (let i = 0; i < b.length; i++) {
    let c = b.split("").slice(i, i + k);
    if (num % +c.join("") === 0 && c.length === k) {
      a++;
    }
  }

  return a;
};
