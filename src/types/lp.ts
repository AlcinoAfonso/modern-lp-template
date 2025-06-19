export interface LPMetadata {
  title: string;
  description: string;
  favicon?: string;
  theme: 'health' | 'business' | 'tech' | 'nature';
  customColors?: {
    primary?: string;
    accent?: string;
    background?: string;
    foreground?: string;
  };
}

export interface CTAButton {
  text: string;
  href: string;
  target?: '_blank' | '_self';
}

export interface HeaderContent {
  logo: {
    text: string;
    subtitle?: string;
    image?: {
      src: string;
      alt: string;
    };
  };
  navigation?: {
    label: string;
    href: string;
  }[];
  cta?: CTAButton;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  badges?: string[];
  cta: {
    primary: CTAButton;
    secondary?: CTAButton;
  };
  image?: {
    src: string;
    alt: string;
  };
  video?: {
    src: string;
    poster?: string;
  };
}

export interface BenefitItem {
  icon?: string;
  title: string;
  description: string;
}

export interface BenefitsContent {
  title: string;
  subtitle?: string;
  items: BenefitItem[];
}

export interface StepItem {
  number?: string;
  title: string;
  description: string;
  icon?: string;
}

export interface HowItWorksContent {
  title: string;
  subtitle?: string;
  steps: StepItem[];
}

export interface AboutContent {
  title: string;
  subtitle?: string;
  content: string | {
    paragraph: string;
  }[];
  image?: {
    src: string;
    alt: string;
  };
  stats?: {
    value: string;
    label: string;
  }[];
}

export interface TestimonialItem {
  name: string;
  role?: string;
  company?: string;
  content: string;
  avatar?: string;
  rating?: number;
}

export interface TestimonialsContent {
  title: string;
  subtitle?: string;
  items: TestimonialItem[];
}

export interface CTAFinalContent {
  title: string;
  subtitle?: string;
  cta: CTAButton;
  benefits?: string[];
  urgency?: string;
}

export interface FooterContent {
  logo?: {
    text: string;
    subtitle?: string;
  };
  sections?: {
    title: string;
    links: { label: string; href: string }[];
  }[];
  copyright: string;
  social?: {
    platform: 'facebook' | 'instagram' | 'linkedin' | 'twitter' | 'youtube';
    href: string;
  }[];
  legal?: {
    label: string;
    href: string;
  }[];
}

export interface LPContent {
  header: HeaderContent;
  hero: HeroContent;
  benefits?: BenefitsContent;
  howItWorks?: HowItWorksContent;
  about?: AboutContent;
  testimonials?: TestimonialsContent;
  ctaFinal: CTAFinalContent;
  footer: FooterContent;
}

export interface LPData {
  metadata: LPMetadata;
  content: LPContent;
}
