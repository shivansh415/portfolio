// src/components/shared/WaxSeal.test.tsx
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import WaxSeal from "./WaxSeal";

describe("WaxSeal Component", () => {
  it("renders the wax seal component with default size", () => {
    const { container } = render(<WaxSeal />);
    const span = container.querySelector("span");
    expect(span).toBeInTheDocument();
    expect(span).toHaveClass("wax-seal");
    expect(span).toHaveStyle({ width: "52px", height: "52px" });
  });

  it("renders custom size proportionally", () => {
    const { container } = render(<WaxSeal size={104} />);
    const span = container.querySelector("span");
    expect(span).toHaveStyle({ width: "104px", height: "104px" });
  });
});
