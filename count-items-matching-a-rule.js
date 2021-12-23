/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let a = 0;

  for (let i = 0; i < items.length; i++) {
    if (ruleKey === "type" && ruleValue === items[i][0]) {
      a++;
    }

    if (ruleKey === "color" && ruleValue === items[i][1]) {
      a++;
    }

    if (ruleKey === "name" && ruleValue === items[i][2]) {
      a++;
    }
  }

  return a;
};
