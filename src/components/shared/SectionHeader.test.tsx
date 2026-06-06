// src/components/shared/SectionHeader.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SectionHeader from "./SectionHeader";

describe("SectionHeader Component", () => {
  it("renders headers in correct order (Hindi before English) and matching classes", () => {
    const { container } = render(
      <SectionHeader
        hindi="मेरी कथा"
        english="MY STORY"
        preLabel="अध्याय १"
      />
    );

    // Verify pre-label
    expect(screen.getByText("अध्याय १")).toBeInTheDocument();

    // Verify Hindi title (h3) and English title (h2)
    const hindiHeading = screen.getByRole("heading", { level: 3, name: "मेरी कथा" });
    const englishHeading = screen.getByRole("heading", { level: 2, name: "MY STORY" });

    expect(hindiHeading).toBeInTheDocument();
    expect(englishHeading).toBeInTheDocument();

    // Verify DOM order: Hindi should be before English
    const headings = container.querySelectorAll("h2, h3");
    expect(headings[0].textContent).toBe("मेरी कथा");
    expect(headings[1].textContent).toBe("MY STORY");
  });

  it("renders subtitles correctly when provided", () => {
    render(
      <SectionHeader
        hindi="संपर्क"
        english="CONTACT"
        subtitle={{
          hindi: "आइये बात करें",
          english: "Let's connect",
        }}
      />
    );

    expect(screen.getByText("Let's connect")).toBeInTheDocument();
    expect(screen.getByText("आइये बात करें")).toBeInTheDocument();
  });
});
