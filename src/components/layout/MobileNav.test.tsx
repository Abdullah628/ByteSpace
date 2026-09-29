import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { MobileNav } from "./MobileNav";

function setup() {
  const user = userEvent.setup();
  render(<MobileNav activeHref="/" />);
  const toggle = screen.getByRole("button", { name: "Open menu" });
  return { user, toggle };
}

describe("MobileNav", () => {
  it("opens the menu from the hamburger button", async () => {
    const { user, toggle } = setup();
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await user.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    const dialog = screen.getByRole("dialog", { name: "Main menu" });
    expect(dialog).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "Join Us" })).toHaveAttribute("href", "/signup");
  });

  it("moves focus into the menu and locks page scroll", async () => {
    const { user, toggle } = setup();
    await user.click(toggle);

    expect(screen.getByRole("button", { name: "Close menu" })).toHaveFocus();
    expect(document.body.style.overflow).toBe("hidden");
  });

  it("closes with Escape and returns focus to the toggle", async () => {
    const { user, toggle } = setup();
    await user.click(toggle);
    await user.keyboard("{Escape}");

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(toggle).toHaveFocus();
    expect(document.body.style.overflow).toBe("");
  });

  it("closes with the close button, the overlay and a link click", async () => {
    const { user, toggle } = setup();

    await user.click(toggle);
    await user.click(screen.getByRole("button", { name: "Close menu" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await user.click(toggle);
    await user.click(screen.getByTestId("mobile-nav-overlay"));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await user.click(toggle);
    await user.click(screen.getByRole("link", { name: "Courses" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("keeps keyboard focus inside the open menu", async () => {
    const { user, toggle } = setup();
    await user.click(toggle);

    const closeButton = screen.getByRole("button", { name: "Close menu" });
    const lastLink = screen.getByRole("link", { name: "Join Us" });

    await user.tab({ shift: true });
    expect(lastLink).toHaveFocus();

    await user.tab();
    expect(closeButton).toHaveFocus();
  });
});
