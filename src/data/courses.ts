import type { Course } from "@/types/course";
import type { ImageAsset } from "@/types/marketing";

export const FEATURED_CATEGORY = "Featured";

export const courseCategories = [
  FEATURED_CATEGORY,
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

/** Categories that end a row of pills on wide screens, matching the Figma layout. */
export const categoryRowEnds = ["Creative Marketing", "Photography"];

const learners: ImageAsset[] = [1, 2, 3, 4].map((n) => ({
  src: `/images/avatars/learner-${n}.png`,
  alt: "",
}));

// The design shows the same stats on every card; only titles and images differ.
const sharedDetails = {
  author: "purepearl studio",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  level: "Beginner",
  learners,
  learnersLabel: "26+",
  price: 25,
  priceUnit: "lifetime",
  rating: 4.5,
} satisfies Partial<Course>;

export const courses: Course[] = [
  {
    ...sharedDetails,
    id: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    image: {
      src: "/images/courses/course-1.jpg",
      alt: "Designer sketching app wireframes on paper next to a laptop",
    },
    categories: [FEATURED_CATEGORY, "UI/UX Design", "Graphic Design"],
  },
  {
    ...sharedDetails,
    id: "build-digital-asset",
    title: "Build Digital Asset",
    image: { src: "/images/courses/course-2.jpg", alt: "Screen full of app icons" },
    categories: [FEATURED_CATEGORY, "Digital Illustration", "Graphic Design"],
  },
  {
    ...sharedDetails,
    id: "the-power-of-big-data",
    title: "The Power of Big Data",
    image: { src: "/images/courses/course-3.jpg", alt: "Analytics dashboard on a monitor" },
    categories: [FEATURED_CATEGORY, "Data Science"],
  },
  {
    ...sharedDetails,
    id: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    image: {
      src: "/images/courses/course-4.jpg",
      alt: "Tidy desk with a computer showing the words Do More",
    },
    categories: [FEATURED_CATEGORY, "Productivity"],
  },
  {
    ...sharedDetails,
    id: "mastering-money-management",
    title: "Mastering Money Management",
    image: { src: "/images/courses/course-5.jpg", alt: "Close-up of a rising line chart" },
    categories: [FEATURED_CATEGORY, "Freelance & Entrepreneurship"],
  },
  {
    ...sharedDetails,
    id: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    image: {
      src: "/images/courses/course-6.jpg",
      alt: "Team planning in front of a wall of sticky notes",
    },
    categories: [FEATURED_CATEGORY, "Freelance & Entrepreneurship", "Marketing"],
  },
];
