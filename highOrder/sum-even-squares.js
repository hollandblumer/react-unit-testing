const arr = [2, 4, 5, 6, 7];

const sumSquareEven = arr.filter((num) => num % 2 === 0);
console.log(sumSquareEven);
const sumSquared = sumSquareEven.map((num) => num ** 2);
console.log(sumSquared);
const sum = sumSquared.reduce((total, num) => total + num, 0);
console.log(sum);

const totalSum = arr
  .filter((num) => num % 2 === 0)
  .map((num) => num ** 2)
  .reduce((total, num) => total + num, 0);

console.log(totalSum);
