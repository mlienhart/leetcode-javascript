/**
 * @param {number[]} bulbs
 * @return {number[]}
 */
var toggleLightBulbs = function (bulbs) {
  const result = new Set();

  for (const bulb of bulbs) {
    if (result.has(bulb)) {
      result.delete(bulb);
    } else {
      result.add(bulb);
    }
  }

  return [...result].sort((a, b) => a - b);
};
