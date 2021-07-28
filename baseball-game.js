/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let a = [];

  for (let i = 0; i < ops.length; i++) {
    if (ops[i] !== "C" && ops[i] !== "D" && ops[i] !== "+") {
      a.push(+ops[i]);
    }
    if (ops[i] === "C") {
      a.pop();
    }
    if (ops[i] === "D") {
      a.push(2 * a.slice(-1)[0]);
    }
    if (ops[i] === "+") {
      a.push(a.slice(-1)[0] + +a.slice(-2)[0]);
    }
  }

  return a.reduce((a, b) => a + b);
};
