import { fireEvent, render, screen } from "@testing-library/react";
import { Projects } from "./Projects";

describe("Projects", () => {
  it("should render Projects component", () => {
    render(<Projects />);

    expect(screen.getByTestId("projects")).toBeInTheDocument();
  });

  it("should render Project Item", () => {
    render(<Projects />);

    expect(screen.getByTestId("project-item")).toBeInTheDocument();
    expect(screen.getByTestId("project-item-image")).toBeInTheDocument();
    expect(screen.getByTestId("project-item-title")).toBeInTheDocument();
    expect(screen.getByTestId("project-item-desc")).toBeInTheDocument();
    expect(screen.getByTestId("project-item-button")).toBeInTheDocument();
  });

  it("should redirect to Github when click button", async () => {
    render(<Projects />);

    const button = screen.getByTestId("project-item-button");
    await fireEvent.click(button);

    window.location.assign(button.href);
    expect(window.location).toBeAt(button.href);
  });
});
