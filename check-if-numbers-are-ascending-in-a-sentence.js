/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  let a = s.split(" ");

  for (let i = 0; i < a.length; i++) {
    a[i] = +a[i];
  }

  let b = a.filter(Boolean);

  for (let i = 0; i < b.length; i++) {
    if (b[i] >= b[i + 1]) {
      return false;
    }
  }

  return true;
};
