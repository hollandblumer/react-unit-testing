import { getSum, calculator } from "./App";

test("adds two numbers correctly", () => {
  expect(getSum(2, 3)).toBe(5);
  expect(getSum(-1, 1)).toBe(0);
});

test("takes 2 numbers and an operator and calculates accordingly", () => {
  expect(calculator(2, 2, "*")).toBe(4);
});
