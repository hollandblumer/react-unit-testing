function formatPhoneNumber(array) {
  const str = `(${array.slice(0, 3).join("")}) ${array
    .slice(3, 6)
    .join("")}-${array.slice(6).join("")}`;
  return str;
}

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

function formatPhoneNumber2(numbers) {
  const formatted = numbers.join("");
  return `(${formatted.substring(0, 3)}) ${formatted.substring(
    3,
    6
  )}-${formatted.substring(6)}`;
}

const formatPhoneNumber3 = (numbers) =>
  `(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers
    .slice(6)
    .join("")}`;

console.log(formatPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(formatPhoneNumber3([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
