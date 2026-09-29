import type { ImageAsset } from "./marketing";

export type Category = {
  name: string;
  /** Path to a 36px icon in /public. */
  icon: string;
  href: string;
};

export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type Course = {
  id: string;
  title: string;
  author: string;
  image: ImageAsset;
  lessons: number;
  duration: string;
  comments: number;
  level: CourseLevel;
  learners: ImageAsset[];
  learnersLabel: string;
  price: number;
  priceUnit: string;
  rating: number;
  /** Category filters this course appears under. */
  categories: string[];
};
