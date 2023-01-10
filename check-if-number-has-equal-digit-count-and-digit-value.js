/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  const counts = {};

  for (const character of num) {
    counts[character] = counts[character] ? counts[character] + 1 : 1;
  }

  for (const [key, value] of Object.entries(counts)) {
    if (value !== +num[key]) {
      return false;
    }
  }

  return true;
};
