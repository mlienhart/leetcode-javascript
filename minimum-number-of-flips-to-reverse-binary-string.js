/**
 * @param {number} n
 * @return {number}
 */
var minimumFlips = function (n) {
  const binaryRepresentation = n.toString(2);
  const reversedBinaryRepresentation = binaryRepresentation
    .split("")
    .reverse()
    .join("");
  let result = 0;

  for (let i = 0; i < binaryRepresentation.length; i++) {
    if (binaryRepresentation[i] !== reversedBinaryRepresentation[i]) {
      result++;
    }
  }

  return result;
};
