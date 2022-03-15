/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  let a = 0;

  if (s1 === s2) {
    return true;
  }

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      a++;
    }
    if (!s2.includes(s1[i])) {
      return false;
    }
  }

  return a === 2;
};
