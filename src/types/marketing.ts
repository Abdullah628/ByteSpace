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

export type Stat = {
  value: string;
  label: string;
};

export type RevenueStat = {
  label: string;
  period: string;
  amount: string;
  trend: string;
  /** Progress towards a target, 0–100. Shows a bar when set. */
  progress?: number;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};
