/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const firstCharacterList = s.split("");
  const secondCharacterList = t.split("");
  const firstResult = [];
  const secondResult = [];

  for (let i = 0; i < s.length; i++) {
    firstResult.push(firstCharacterList[i].charCodeAt());
  }

  for (let i = 0; i < t.length; i++) {
    secondResult.push(secondCharacterList[i].charCodeAt());
  }

  return String.fromCharCode(
    secondResult.reduce((a, b) => a + b, 0) -
      firstResult.reduce((a, b) => a + b, 0)
  );
};
