import { render } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("should be able to render component", () => {
    expect(() => {
      render(<Home />);
    }).not.toThrow();
  });
});
