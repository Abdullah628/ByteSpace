import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { SearchForm } from "./SearchForm";

const push = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push }),
}));

function setup() {
  const user = userEvent.setup();
  render(<SearchForm />);
  return {
    user,
    input: screen.getByRole("searchbox", { name: "Search courses" }),
    submit: screen.getByRole("button", { name: "Search" }),
  };
}

describe("SearchForm", () => {
  beforeEach(() => push.mockClear());

  it("is a labelled search landmark", () => {
    setup();
    expect(screen.getByRole("search")).toBeInTheDocument();
  });

  it("takes the visitor to the course catalog", async () => {
    const { user, input, submit } = setup();
    await user.type(input, "design");
    await user.click(submit);

    expect(push).toHaveBeenCalledWith("/#courses");
  });

  it("submits with the Enter key", async () => {
    const { user, input } = setup();
    await user.type(input, "music{Enter}");

    expect(push).toHaveBeenCalledTimes(1);
  });

  it("does nothing for an empty search", async () => {
    const { user, input, submit } = setup();
    await user.type(input, "   ");
    await user.click(submit);

    expect(push).not.toHaveBeenCalled();
  });
});
