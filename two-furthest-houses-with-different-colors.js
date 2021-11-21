/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
  let a = [];

  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < colors.length; j++) {
      if (colors[i] !== colors[j]) {
        a.push(Math.abs(i - j));
      }
    }
  }

  return Math.max(...a);
};
