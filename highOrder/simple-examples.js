const arr = [2, 3, 5, 6, 7];
const doubledNumbers = arr.map((num) => {
  return num * 2;
});

const arr2 = [2, 3, 5, 6, 7];
const doubledNumbers3 = arr.map((num) => num * 2);

const evenNumbers = arr.filter((num) => num % 2 == 0);

const evenNumbers2 = arr.filter((num) => {
  return num % 2 == 0;
});

const sum = arr.reduce((total, num) => {
  return total + num;
}, 0);

const sum2 = arr.reduce((total, num) => total + num, 0);

console.log(sum);

arr.forEach((num) => console.log(num));

const found = arr.find((num) => num > 2);
console.log(found);

const hasEvenNumber = arr.some((num) => num % 2 === 0);
console.log(hasEvenNumber);

const allNumsGreaterThanZero = arr.every((num) => num > 0);
console.log(allNumsGreaterThanZero);
