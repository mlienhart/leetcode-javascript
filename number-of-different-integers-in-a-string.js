/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  let a = word.split(/[a-z]+/);
  let b = new Set();

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== "") {
      b.add(BigInt(a[i]));
    }
  }

  return b.size;
};
