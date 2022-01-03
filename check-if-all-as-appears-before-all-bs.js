/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
  return (
    s ===
    s
      .split("")
      .sort((a, b) => (a > b ? 1 : -1))
      .join("")
  );
};
