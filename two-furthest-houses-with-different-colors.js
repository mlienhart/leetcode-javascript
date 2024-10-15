/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
  let result = 0;

  for (let i = 0; i < colors.length - 1; i++) {
    for (let j = i + 1; j < colors.length; j++) {
      if (colors[i] !== colors[j]) {
        result = Math.max(result, Math.abs(i - j));
      }
    }
  }

  return result;
};
