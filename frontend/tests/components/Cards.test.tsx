import React from "react";
import { render, screen } from "@testing-library/react";
import MyCards from "../../src/components/Cards";

describe("MyCards Component", () => {
  test("renders My Cards title", () => {
    render(<MyCards cards={[]} />);
    expect(screen.getByText(/My Cards/i)).toBeInTheDocument();
  });
});
