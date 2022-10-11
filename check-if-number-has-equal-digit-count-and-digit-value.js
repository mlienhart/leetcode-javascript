/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  let a = {};

  for (const b of num) {
    a[b] = a[b] ? a[b] + 1 : 1;
  }

  for (const [key, value] of Object.entries(a)) {
    if (value !== +num[key]) {
      return false;
    }
  }

  return true;
};
