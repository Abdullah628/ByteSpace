import type {
  CourseHighlight,
  ImageAsset,
  Partner,
  ProgressStat,
  SocialProof,
} from "@/types/marketing";

// Student photos are decorative next to the "Happy Students" text, so alt is empty.
const studentAvatars: ImageAsset[] = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
  src: `/images/avatars/avatar-${n}.png`,
  alt: "",
}));

export const hero = {
  title: "Get Access to Hundreds Courses Available",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
  image: {
    src: "/images/hero-student.png",
    alt: "Smiling student wearing headphones and holding a laptop",
  },
  highlight: { title: "UI/UX Design", courses: 200, students: "1000+" } satisfies CourseHighlight,
  progress: { label: "Learning Progress", percent: 55 } satisfies ProgressStat,
  socialProof: {
    title: "Happy Students",
    rating: 4.5,
    reviews: 240,
    avatars: studentAvatars,
    overflowLabel: "2K+",
  } satisfies SocialProof,
};

// The design uses placeholder "Logoipsum" marks for the partner logos.
export const partners: Partner[] = [
  { name: "Logoipsum", logo: "/images/partners/partner-1.svg", width: 167, height: 41 },
  { name: "Logoipsum", logo: "/images/partners/partner-2.svg", width: 168, height: 41 },
  { name: "Logoipsum", logo: "/images/partners/partner-3.svg", width: 170, height: 41 },
  { name: "Logoipsum", logo: "/images/partners/partner-4.svg", width: 170, height: 41 },
  { name: "Logoipsum", logo: "/images/partners/partner-5.svg", width: 169, height: 42 },
];
