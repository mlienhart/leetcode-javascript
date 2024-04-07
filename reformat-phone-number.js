/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
  const numbers = number.split("-").join("").split(" ").join("").split("");
  const result = [];

  while (numbers.length > 4) {
    result.push(numbers.splice(0, 3));
  }

  if (numbers.length === 4) {
    result.push(numbers.splice(0, 2));
    result.push(numbers);
  } else {
    result.push(numbers);
  }

  return result.join("-").split(",").join("");
};
