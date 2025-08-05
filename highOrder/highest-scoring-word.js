function highestScoringWord(str) {
  const strArr = str.split(" ");
  //console.log(strArr);
  let scores = strArr.map((word) => {
    let score = 0;
    for (const letter of word) {
      score += letter.charCodeAt(0);
    }
    return score;
  });

  console.log(scores);

  console.log(strArr[scores.indexOf(Math.max(...scores))]);
  return;
}

console.log(highestScoringWord("the quick zzzzzz brown fox jumped"));

function highestScoringWord2(str) {
  const words = str.split(" ");
  //console.log(strArr);
  let scores = words.map((word) => {
    return Array.from(word).reduce(
      (score, letter) => score + letter.charCodeAt(0),
      0
    );
  });

  // console.log(scores);
  // console.log(words[scores.indexOf(Math.max(...scores))]);
  return words[scores.indexOf(Math.max(...scores))];
}

console.log(highestScoringWord2("the quick zzzzzz brown fox jumped"));
