//number is greater than 0
//number will be an integer

const fizzBuzz = function (num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0) {
      result.push("fizz");
    } else if (i % 5 === 0) {
      result.push("buzz");
    } else if (i % 5 === 0 && i % 3 === 0) {
      result.push("fizzbuzz");
    } else {
      result.push(i);
    }
  }

  console.log(result);
};

fizzBuzz(7);
