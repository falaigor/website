import { fireEvent, render, screen } from "@testing-library/react";
import { Contact } from "../Contact";

describe("Contact", () => {
  it("should render Contact component", () => {
    render(<Contact />);

    expect(screen.getByTestId("contact")).toBeInTheDocument();
  });

  it("should redirect to Github when click button", async () => {
    render(<Contact />);

    const button = screen.getByTestId("chat-button");
    await fireEvent.click(button);

    window.location.assign(button.href);
    expect(window.location).toBeAt(button.href);
  });
});
