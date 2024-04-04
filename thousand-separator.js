/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  const reversedValue = `${n}`.split("").reverse().join("");
  const result = [];

  for (let i = 0; i < reversedValue.length; i++) {
    if (i % 3 === 0 && i > 0) {
      result.push(".");
    }
    result.push(reversedValue[i]);
  }

  return result.reverse().join("");
};
