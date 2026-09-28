import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("joins conditional class names", () => {
    const isActive = false;
    expect(cn("px-4", isActive && "hidden", undefined, "py-2")).toBe("px-4 py-2");
  });

  it("lets the last conflicting utility win", () => {
    expect(cn("px-4", "px-6")).toBe("px-6");
    expect(cn("bg-primary", "bg-accent")).toBe("bg-accent");
  });

  it("keeps a custom text size and a text color together", () => {
    expect(cn("text-heading-l", "text-primary")).toBe("text-heading-l text-primary");
  });

  it("resolves conflicts between custom text sizes", () => {
    expect(cn("text-body-m", "text-label-s")).toBe("text-label-s");
  });
});
