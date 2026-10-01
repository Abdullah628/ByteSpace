import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { LoginForm } from "./LoginForm";

function setup() {
  const user = userEvent.setup();
  render(<LoginForm />);
  return {
    user,
    email: screen.getByLabelText("Email"),
    password: screen.getByLabelText("Password"),
    submit: screen.getByRole("button", { name: "Sign In" }),
  };
}

describe("LoginForm", () => {
  it("shows an error for each empty field and focuses the first one", async () => {
    const { user, email, password, submit } = setup();
    await user.click(submit);

    expect(await screen.findByText("Please enter your email address.")).toBeInTheDocument();
    expect(screen.getByText("Please enter your password.")).toBeInTheDocument();
    expect(email).toHaveAttribute("aria-invalid", "true");
    expect(email).toHaveAccessibleDescription("Please enter your email address.");
    expect(password).toHaveAttribute("aria-invalid", "true");
    expect(email).toHaveFocus();
  });

  it("rejects an invalid email and a short password", async () => {
    const { user, email, password, submit } = setup();
    await user.type(email, "not-an-email");
    await user.type(password, "short");
    await user.click(submit);

    expect(await screen.findByText("Please enter a valid email address.")).toBeInTheDocument();
    expect(screen.getByText("Password must be at least 8 characters.")).toBeInTheDocument();
  });

  it("shows and hides the password", async () => {
    const { user, password } = setup();
    expect(password).toHaveAttribute("type", "password");

    await user.click(screen.getByRole("button", { name: "Show password" }));
    expect(password).toHaveAttribute("type", "text");

    await user.click(screen.getByRole("button", { name: "Hide password" }));
    expect(password).toHaveAttribute("type", "password");
  });

  it("shows a loading state, then confirms the sign-in", async () => {
    const { user, email, password, submit } = setup();
    await user.type(email, "learner@example.com");
    await user.type(password, "correct-horse");
    await user.click(submit);

    expect(screen.getByRole("button", { name: "Signing in…" })).toBeDisabled();
    expect(await screen.findByText(/You're signed in/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Go to homepage" })).toHaveAttribute("href", "/");
  });

  it("explains that social sign-in is not available", async () => {
    const { user } = setup();
    await user.click(screen.getByRole("button", { name: "Continue with Google" }));

    expect(screen.getByText("Google sign-in isn't available in this demo.")).toBeInTheDocument();
  });
});
