import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { NewsletterForm } from "./NewsletterForm";

function setup() {
  const user = userEvent.setup();
  render(<NewsletterForm />);
  return {
    user,
    input: screen.getByRole("textbox", { name: "Email address" }),
    submit: screen.getByRole("button", { name: "Subscribe" }),
  };
}

describe("NewsletterForm", () => {
  it("asks for an email when submitted empty", async () => {
    const { user, input, submit } = setup();
    await user.click(submit);

    expect(screen.getByRole("alert")).toHaveTextContent("Please enter your email address.");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAccessibleDescription(/Please enter your email address/);
  });

  it("rejects an invalid email", async () => {
    const { user, input, submit } = setup();
    await user.type(input, "not-an-email");
    await user.click(submit);

    expect(screen.getByRole("alert")).toHaveTextContent("Please enter a valid email address.");
    expect(screen.getByRole("status")).toBeEmptyDOMElement();
  });

  it("clears the error once the user edits the email", async () => {
    const { user, input, submit } = setup();
    await user.click(submit);
    await user.type(input, "a");

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    expect(input).not.toHaveAttribute("aria-invalid");
  });

  it("confirms the subscription for a valid email and resets the field", async () => {
    const { user, input, submit } = setup();
    await user.type(input, "learner@example.com");
    await user.keyboard("{Enter}");

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("Thanks for subscribing!");
    expect(input).toHaveValue("");
    expect(submit).toBeInTheDocument();
  });
});
