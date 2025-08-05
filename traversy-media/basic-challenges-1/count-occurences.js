const countOccurrences = function (word, character) {
  let count = 0;
  for (const char of word) {
    if (character === char) {
      count++;
    }
  }

  return count;
};

console.log(countOccurrences("holland", "l"));
