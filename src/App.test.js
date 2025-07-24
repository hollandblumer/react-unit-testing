import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("increments count when button is clicked", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /count is/i });
  fireEvent.click(button);
  expect(button).toHaveTextContent("count is 1");
});
