import type {
  CourseHighlight,
  ImageAsset,
  Partner,
  ProgressStat,
  RevenueStat,
  SocialProof,
  Stat,
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

export const growth = {
  title: "Your Path to Professional Growth Starts Here!",
  description:
    "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.",
  stats: [
    { value: "12K", label: "Students" },
    { value: "70+", label: "Courses" },
    { value: "16", label: "Creators" },
  ] satisfies Stat[],
};

export const creatorTools = {
  title: "Create & Manage Courses Easily.",
  description:
    "supports individuals or entities in the creation, publication, and administration of educational courses.",
  benefits: [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
  ],
  image: {
    src: "/images/creator-student.png",
    alt: "Smiling creator wearing headphones and holding a tablet",
  },
  revenue: [
    { label: "Total Revenue", period: "July 1-28", amount: "$120.29", trend: "+12$", progress: 56 },
    { label: "Year to Date", period: "2023", amount: "$1,200.38", trend: "+12$" },
  ] satisfies RevenueStat[],
};

export const creatorCta = {
  title: "Unlock Your Potential as a Creator with ByteSpace",
  description:
    "Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.",
  action: { label: "Join as Creator", href: "/signup" },
};

export const testimonialsIntro = {
  title: "Discover What Our Community Is Saying",
  description:
    "At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.",
};
