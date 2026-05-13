// M37Gym Fitness Club — shared landing page types

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface ClassItem {
  time: string;
  name: string;
  trainer: string;
  duration: string;
  isOnline?: boolean;
}

export interface MembershipTier {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
  ctaLabel: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
}
