import { fireEvent, render, screen } from "@testing-library/react";
import { About } from "../About";

describe("About", () => {
  it("should render About component", () => {
    render(<About />);

    expect(screen.getByTestId("about")).toBeInTheDocument();
  });

  it("should render text in About component", () => {
    render(<About />);

    expect(screen.getByTestId("about-text")).toMatchSnapshot();
  });

  it("should redirect to Github when click button", () => {
    render(<About />);

    const button = screen.getByTestId("github-button");
    fireEvent.click(button);

    window.location.assign(button.href);

    expect(button).toHaveAttribute("href", "https://github.com/falaigor");
    expect(window.location).toBeAt(button.href);
  });

  it("should redirect to Linkedin when click button", () => {
    render(<About />);

    const button = screen.getByTestId("linkedin-button");
    fireEvent.click(button);
    window.location.assign(button.href);

    expect(button).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/falaigor"
    );
    expect(window.location).toBeAt(button.href);
  });

  it("should redirect to Instagram when click button", () => {
    render(<About />);

    const button = screen.getByTestId("instagram-button");
    fireEvent.click(button);
    window.location.assign(button.href);

    expect(button).toHaveAttribute(
      "href",
      "https://www.instagram.com/falaigors"
    );
    expect(window.location).toBeAt(button.href);
  });
});
