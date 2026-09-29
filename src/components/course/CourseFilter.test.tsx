import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { courseCategories, courses } from "@/data/courses";
import { CourseFilter } from "./CourseFilter";

function setup() {
  const user = userEvent.setup();
  render(<CourseFilter categories={courseCategories} courses={courses} moreHref="/#categories" />);
  const pills = screen.getByRole("group", { name: "Filter courses by category" });
  const pill = (name: string) => within(pills).getByRole("button", { name });
  const courseTitles = () =>
    screen.queryAllByRole("heading", { level: 3 }).map((heading) => heading.textContent);
  return { user, pill, courseTitles };
}

describe("CourseFilter", () => {
  it("shows every featured course by default", () => {
    const { pill, courseTitles } = setup();

    expect(pill("Featured")).toHaveAttribute("aria-pressed", "true");
    expect(pill("Music")).toHaveAttribute("aria-pressed", "false");
    expect(courseTitles()).toHaveLength(6);
  });

  it("filters the grid to the selected category", async () => {
    const { user, pill, courseTitles } = setup();
    await user.click(pill("Data Science"));

    expect(pill("Data Science")).toHaveAttribute("aria-pressed", "true");
    expect(pill("Featured")).toHaveAttribute("aria-pressed", "false");
    expect(courseTitles()).toEqual(["The Power of Big Data"]);
    expect(screen.getByRole("status")).toHaveTextContent("1 course in Data Science");
  });

  it("shows an empty state for a category without courses", async () => {
    const { user, pill, courseTitles } = setup();
    await user.click(pill("Cooking"));

    expect(courseTitles()).toHaveLength(0);
    expect(screen.getByText("No courses in this category yet.")).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("0 courses in Cooking");
  });

  it("can be operated with the keyboard", async () => {
    const { user, pill, courseTitles } = setup();
    pill("Graphic Design").focus();
    await user.keyboard("{Enter}");

    expect(courseTitles()).toEqual(["Learn Figma from Basic", "Build Digital Asset"]);
  });

  it("links to more categories", () => {
    setup();
    expect(screen.getByRole("link", { name: "+ More" })).toHaveAttribute("href", "/#categories");
  });
});
