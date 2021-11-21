/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
  let a = 0;

  for (let i = 0; i < colors.length - 1; i++) {
    for (let j = i + 1; j < colors.length; j++) {
      if (colors[i] !== colors[j]) {
        a = Math.max(a, Math.abs(i - j));
      }
    }
  }

  return a;
};
