export type ImageAsset = {
  src: string;
  alt: string;
};

export type Partner = {
  name: string;
  logo: string;
  width: number;
  height: number;
};

export type CourseHighlight = {
  title: string;
  courses: number;
  students: string;
};

export type ProgressStat = {
  label: string;
  percent: number;
};

export type SocialProof = {
  title: string;
  rating: number;
  reviews: number;
  avatars: ImageAsset[];
  overflowLabel: string;
};
