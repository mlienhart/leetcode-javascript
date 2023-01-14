/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
  const dictionary = {
    a: "0",
    b: "1",
    c: "2",
    d: "3",
    e: "4",
    f: "5",
    g: "6",
    h: "7",
    i: "8",
    j: "9",
  };
  const firstWordSum = [];
  const secondWordSum = [];
  const targetWordSum = [];

  for (let i = 0; i < firstWord.length; i++) {
    firstWordSum.push(dictionary[firstWord[i]]);
  }

  for (let i = 0; i < secondWord.length; i++) {
    secondWordSum.push(dictionary[secondWord[i]]);
  }

  for (let i = 0; i < targetWord.length; i++) {
    targetWordSum.push(dictionary[targetWord[i]]);
  }

  return (
    +firstWordSum.join("") + +secondWordSum.join("") === +targetWordSum.join("")
  );
};
