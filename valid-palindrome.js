/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let a = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-zA-Z]/i) || s[i].match(/^\d+$/)) {
      a.push(s[i]);
    }
  }

  return (
    a.join("").toLocaleLowerCase() === a.reverse().join("").toLocaleLowerCase()
  );
};
