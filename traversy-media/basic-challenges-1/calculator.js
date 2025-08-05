const calculator = function (a, b, expression) {
  let result;
  switch (expression) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "%":
      result = a % b;
      break;
    case "/":
      result = a / b;
      break;
    case "*":
      result = a % b;
      break;
    default:
      throw new Error("not a valid operator");
  }
  return result;
};

console.log(calculator(4, 3, "/"));
