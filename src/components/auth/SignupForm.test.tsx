import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { SignupForm } from "./SignupForm";

function setup() {
  const user = userEvent.setup();
  render(<SignupForm />);
  return {
    user,
    name: screen.getByLabelText("Full Name"),
    email: screen.getByLabelText("Email"),
    password: screen.getByLabelText("Password"),
    submit: screen.getByRole("button", { name: "Continue" }),
  };
}

describe("SignupForm", () => {
  it("shows an error for every missing field", async () => {
    const { user, name, submit } = setup();
    await user.click(submit);

    expect(await screen.findByText("Please enter your full name.")).toBeInTheDocument();
    expect(screen.getByText("Please enter your email address.")).toBeInTheDocument();
    expect(screen.getByText("Please enter your password.")).toBeInTheDocument();
    expect(name).toHaveFocus();
  });

  it("describes the password rule and keeps it linked when invalid", async () => {
    const { user, password, submit } = setup();
    expect(password).toHaveAccessibleDescription("At least 8 characters.");

    await user.type(password, "short");
    await user.click(submit);

    expect(await screen.findByText("Password must be at least 8 characters.")).toBeInTheDocument();
    expect(password).toHaveAccessibleDescription(
      "Password must be at least 8 characters. At least 8 characters.",
    );
  });

  it("clears an error as soon as the field becomes valid", async () => {
    const { user, name, submit } = setup();
    await user.click(submit);
    expect(await screen.findByText("Please enter your full name.")).toBeInTheDocument();

    await user.type(name, "Jamie Davis");
    expect(screen.queryByText("Please enter your full name.")).not.toBeInTheDocument();
  });

  it("creates the account after a short loading state", async () => {
    const { user, name, email, password, submit } = setup();
    await user.type(name, "Jamie Davis");
    await user.type(email, "jamie@example.com");
    await user.type(password, "longenough");
    await user.click(submit);

    expect(screen.getByRole("button", { name: "Creating account…" })).toBeDisabled();
    expect(await screen.findByText(/Welcome aboard, Jamie Davis!/)).toBeInTheDocument();
  });
});
