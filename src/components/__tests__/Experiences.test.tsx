import { render, screen } from "@testing-library/react";
import { Experiences } from "../Experiences";

describe("Experiences", () => {
  it("should render Experiences component", () => {
    render(<Experiences />);

    expect(screen.getByTestId("experiences")).toBeInTheDocument();
  });

  it("should render Experience Item", () => {
    render(<Experiences />);

    expect(screen.getByTestId("item")).toBeInTheDocument();
    expect(screen.getByTestId("item-number")).toBeInTheDocument();
    expect(screen.getByTestId("item-title")).toBeInTheDocument();
    expect(screen.getByTestId("item-desc")).toBeInTheDocument();
    expect(screen.getByTestId("item-date")).toBeInTheDocument();
  });
});
