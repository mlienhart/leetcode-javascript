/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  return !(
    (["a", "c", "e", "g"].includes(coordinates.split("")[0]) &&
      coordinates.split("")[1] % 2 !== 0) ||
    (!["a", "c", "e", "g"].includes(coordinates.split("")[0]) &&
      coordinates.split("")[1] % 2 === 0)
  );
};
