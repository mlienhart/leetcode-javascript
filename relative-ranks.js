/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let a = [];
  let b = score.map((x) => x).sort((a, b) => b - a);

  for (let i = 0; i < score.length; i++) {
    if (score[i] === b[0]) {
      a.push({ c: "Gold Medal" });
    } else if (score[i] === b[1]) {
      a.push({ c: "Silver Medal" });
    } else if (score[i] === b[2]) {
      a.push({ c: "Bronze Medal" });
    } else {
      a.push({ c: `${b.indexOf(score[i]) + 1}` });
    }
  }

  return a.map((x) => x.c);
};
