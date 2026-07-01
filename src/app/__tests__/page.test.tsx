import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import CookUnityClonePage from "../page";

describe("CookUnity landing page", () => {
  it("renders the hero heading", () => {
    render(<CookUnityClonePage />);
    expect(
      screen.getByRole("heading", { name: /the best chefs in your city/i }),
    ).toBeInTheDocument();
  });

  it("renders the primary hero CTA", () => {
    render(<CookUnityClonePage />);
    expect(screen.getByRole("button", { name: /see the menu/i })).toBeInTheDocument();
  });

  it("renders the plans section with the featured plan", () => {
    render(<CookUnityClonePage />);
    expect(screen.getByText(/pick a plan that fits your week/i)).toBeInTheDocument();
    expect(screen.getByText(/most popular/i)).toBeInTheDocument();
  });

  it("renders a back-to-portfolio link", () => {
    render(<CookUnityClonePage />);
    expect(
      screen.getAllByRole("link", { name: /back to portfolio/i }).length,
    ).toBeGreaterThan(0);
  });
});
