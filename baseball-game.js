/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const result = [];

  for (let i = 0; i < ops.length; i++) {
    if (ops[i] !== "C" && ops[i] !== "D" && ops[i] !== "+") {
      result.push(+ops[i]);
    }
    if (ops[i] === "C") {
      result.pop();
    }
    if (ops[i] === "D") {
      result.push(2 * result.slice(-1)[0]);
    }
    if (ops[i] === "+") {
      result.push(result.slice(-1)[0] + +result.slice(-2)[0]);
    }
  }

  return result.reduce((a, b) => a + b, 0);
};
