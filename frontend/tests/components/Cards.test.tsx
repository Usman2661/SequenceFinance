import React from "react";
import { render, screen } from "@testing-library/react";
import MyCards from "../../src/components/Cards";

test("renders Hello component with name", () => {
  render(<MyCards cards={[]} />);
  expect(screen.getByText(/My Cards/i)).toBeInTheDocument();
});
