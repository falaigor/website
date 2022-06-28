import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

describe("Header", () => {
  it("should render Header component", () => {
    render(<Header />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("should go to section when click button", () => {
    render(<Header />);

    const [about, projects, exp, contact] = screen.getAllByRole("link");
    expect(about).toHaveAttribute("href", "/#about");
    expect(projects).toHaveAttribute("href", "/#projects");
    expect(exp).toHaveAttribute("href", "/#experiences");
    expect(contact).toHaveAttribute("href", "/#contact");
  });
});
