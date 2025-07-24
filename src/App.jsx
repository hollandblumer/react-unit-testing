import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export function getSum(a, b) {
  return a + b;
}

export function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "*":
      result = num1 * num2;
      break;

    default:
      throw new Error("invalid operator");
  }
  return result;
}

export function findMaxNumer(arr) {
  return Math.max(...arr);
}

export function findMaxNumer2(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

export const titleCase = (str) => {
  const words = str.toLowerCase.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
};

export function reverseString(str) {
  return str.split("").reverse().join("");
}

export const reverseString2 = (str) => str.split("").reverse().join("");

export function reverseString3(str) {
  let reversed = "";
  for (let i = reversed.length; i >= 0; i--) {
    reversed += str[i];
  }
}

export function palindrom(str) {}

export const nameMap = () => {
  const map = new Map([
    [1, "John"],
    [2, "jack"],
    [3, "Joe"],
  ]);

  const myFunction = () => {};

  const myObj = {};

  const map2 = new Map([
    ["one", "John"],
    [2, "jack"],
    [true, "Joe"],
    [null, "Joe"],
  ]);
};

function App() {
  const [count, setCount] = useState(0);

  return <main></main>;
}

export default App;
