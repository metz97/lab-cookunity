import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

// Mock next/font/google so components that pull in fonts render under jsdom.
vi.mock("next/font/google", () => ({
  Geist: () => ({ className: "", variable: "" }),
  Geist_Mono: () => ({ className: "", variable: "" }),
}));

afterEach(() => {
  cleanup();
});
