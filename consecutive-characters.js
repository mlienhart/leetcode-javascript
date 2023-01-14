/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let maximumLength = 1;
  let currentLength = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      currentLength++;
      maximumLength = Math.max(maximumLength, currentLength);
    } else {
      currentLength = 1;
    }
  }

  return maximumLength;
};
