function findMaxNumber(numbers) {
  let max = 0;
  for (const num of numbers) {
    if (max < num) {
      max = num;
    }
  }
  return max;
}

console.log(findMaxNumber([4, 5, 6, 50, 11, 20]));
