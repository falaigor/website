import { fireEvent, render, screen } from "@testing-library/react";
import { Projects } from "../Projects";

describe("Projects", () => {
  const projects = [
    {
      slug: "html-tag-memory-test",
      title: "HTML Tag Memory Test",
      excerpt: "Uma descricao bem legal",
      cover: "https://images.prismic.io/",
      url: "https://tag-memory-test.vercel.app/",
      highlight: true,
    },
  ];
  it("should render Projects component", () => {
    render(<Projects />);

    expect(screen.getByTestId("projects")).toBeInTheDocument();
  });

  it("should render Project Item", () => {
    render(<Projects {...projects} />);

    expect(screen.getByTestId("item")).toBeInTheDocument();
    expect(screen.getByTestId("item-image")).toBeInTheDocument();
    expect(screen.getByTestId("item-title")).toBeInTheDocument();
    expect(screen.getByTestId("item-desc")).toBeInTheDocument();
    expect(screen.getByTestId("item-button")).toBeInTheDocument();
  });

  it("should redirect to Github when click button", async () => {
    render(<Projects {...projects} />);

    const button = screen.getByTestId("item-button");
    await fireEvent.click(button);

    window.location.assign(button.href);
    expect(window.location).toBeAt(button.href);
  });
});
