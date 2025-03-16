/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const result = s
    .split("")
    .filter((x) => x.match(/[a-zA-Z]/i) || x.match(/^\d+$/));

  return (
    result.join("").toLocaleLowerCase() ===
    result.reverse().join("").toLocaleLowerCase()
  );
};
