/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
  if (password.length < 8) {
    return false;
  }

  if (
    password
      .split("")
      .every(
        (x) =>
          x === x.toLowerCase() ||
          password.split("").every((x) => x === x.toUpperCase())
      )
  ) {
    return false;
  }

  let a = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"];
  let b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let c = 0;
  let d = 0;

  for (let i = 0; i < password.length; i++) {
    if (password[i] === password[i + 1]) {
      return false;
    }
  }

  for (let i = 0; i < a.length; i++) {
    if (password.includes(a[i])) {
      c++;
    }
    if (password.includes(b[i])) {
      d++;
    }
  }

  if (c > 0 && d > 0) {
    return true;
  } else {
    return false;
  }
};
