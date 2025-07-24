function wordFrequencyCounter(str) {
  const words = str.toLowerCase().split(/\W+/); //get any nonword character and get all the occurrences of it

  const wordFrequency = new Map();

  for (const word of words) {
    if (word === "") {
      continue;
    }

    wordFrequency.has(word)
      ? wordFrequency.set(word, wordFrequency.get(word) + 1)
      : wordFrequency.set(word, 1);
  }

  return wordFrequency;
}

const result = wordFrequencyCounter(
  "The quick brown fox jumped over the lazy dog."
);

console.log(result);
