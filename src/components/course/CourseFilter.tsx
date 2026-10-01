"use client";

import Link from "next/link";
import { useState } from "react";
import type { Course } from "@/types/course";
import { CategoryPill } from "./CategoryPill";
import { CourseGrid } from "./CourseGrid";

type CourseFilterProps = {
  categories: string[];
  courses: Course[];
  /** Categories after which the pills break onto a new row on wide screens. */
  rowEnds?: string[];
  /** Where the "+ More" link points. */
  moreHref: string;
};

function splitIntoRows(categories: string[], rowEnds: string[]) {
  const rows: string[][] = [[]];
  for (const category of categories) {
    rows[rows.length - 1].push(category);
    if (rowEnds.includes(category)) rows.push([]);
  }
  return rows;
}

/** Category pills that filter the course grid below them. */
export function CourseFilter({ categories, courses, rowEnds = [], moreHref }: CourseFilterProps) {
  const [selected, setSelected] = useState(categories[0]);
  const visibleCourses = courses.filter((course) => course.categories.includes(selected));
  const rows = splitIntoRows(categories, rowEnds);

  return (
    <div className="flex flex-col gap-12 lg:gap-19">
      {/*
        One sideways-scrolling line on small screens, wrapping centered rows from lg.
        From xl the rows follow the Figma line breaks (rows are `display: contents` below xl).
      */}
      <div
        role="group"
        aria-label="Filter courses by category"
        className="-mx-4 flex scrollbar-none gap-4 overflow-x-auto px-4 pt-1 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:flex-wrap lg:justify-center lg:gap-y-5.25 lg:overflow-visible lg:px-0 lg:py-0 xl:flex-col xl:items-center"
      >
        {rows.map((row, index) => (
          <div key={row[0] ?? index} className="contents xl:flex xl:gap-4">
            {row.map((category) => (
              <CategoryPill
                key={category}
                label={category}
                selected={category === selected}
                onSelect={() => setSelected(category)}
              />
            ))}
            {index === rows.length - 1 && (
              <Link
                href={moreHref}
                className="shrink-0 self-center rounded-sm px-2 text-label-m whitespace-nowrap text-gray-950 hover:text-primary"
              >
                + More
              </Link>
            )}
          </div>
        ))}
      </div>

      <p role="status" className="sr-only">
        {visibleCourses.length === 1 ? "1 course" : `${visibleCourses.length} courses`} in{" "}
        {selected}
      </p>
      <CourseGrid courses={visibleCourses} />
    </div>
  );
}
