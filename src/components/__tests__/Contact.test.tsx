import { render, screen } from "@testing-library/react";
import { Contact } from "../Contact";

describe("Contact", () => {
  it("should render Contact component", () => {
    render(<Contact />);

    expect(screen.getByTestId("contact")).toBeInTheDocument();
  });
});
