import { render, screen } from "@testing-library/react";
import SignUp from "./SIgnUp";

test("render sign up test", () => {
  render(<SignUp />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toMatchSnapshot();
});
