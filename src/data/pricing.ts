export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingColumn {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  featured?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

export const websiteBuildPlans: PricingColumn[] = [
  {
    name: 'Launch',
    price: '$2,500',
    period: 'one-time + $199/mo',
    description: 'For new businesses that need a professional website fast.',
    features: [
      { text: 'Custom website (5–8 pages)', included: true },
      { text: 'Mobile-first responsive design', included: true },
      { text: 'SEO foundation & schema markup', included: true },
      { text: 'Contact forms & lead capture', included: true },
      { text: 'Managed hosting & SSL', included: true },
      { text: 'Security monitoring & backups', included: true },
      { text: '1 hr/mo content updates', included: true },
      { text: 'Google Analytics setup', included: true },
    ],
    ctaText: 'Get Started',
    ctaHref: '/contact/',
  },
  {
    name: 'Growth',
    price: '$4,500',
    period: 'one-time + $399/mo',
    description: 'For businesses ready to compete online and grow.',
    featured: true,
    features: [
      { text: 'Custom website (8–15 pages)', included: true },
      { text: 'Mobile-first responsive design', included: true },
      { text: 'Advanced SEO & local optimization', included: true },
      { text: 'Blog & content management', included: true },
      { text: 'Booking or lead-form integration', included: true },
      { text: 'Managed hosting & SSL', included: true },
      { text: 'Security monitoring & backups', included: true },
      { text: '3 hrs/mo content updates', included: true },
      { text: 'Monthly SEO & performance reports', included: true },
      { text: 'Google Business Profile setup', included: true },
    ],
    ctaText: 'Get Started',
    ctaHref: '/contact/',
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: 'from $799/mo',
    description: 'For established businesses with complex needs or aggressive growth goals.',
    features: [
      { text: 'Everything in Growth', included: true },
      { text: 'E-commerce or custom functionality', included: true },
      { text: 'Advanced analytics & strategy', included: true },
      { text: 'Content creation & calendar', included: true },
      { text: 'Conversion rate optimization', included: true },
      { text: 'Competitor monitoring', included: true },
      { text: '6 hrs/mo content updates', included: true },
      { text: 'Quarterly strategy calls', included: true },
    ],
    ctaText: 'Contact Us',
    ctaHref: '/contact/',
  },
];

export const managementPlans: PricingColumn[] = [
  {
    name: 'Essential',
    price: '$299',
    period: '/month',
    description: 'Reliable hosting, security, and basic site care.',
    features: [
      { text: 'Managed hosting & SSL', included: true },
      { text: 'Daily backups', included: true },
      { text: 'Security & uptime monitoring', included: true },
      { text: '1 hr/mo content updates', included: true },
      { text: 'Monthly analytics snapshot', included: true },
      { text: 'SEO monitoring & improvements', included: false },
      { text: 'Keyword tracking', included: false },
      { text: 'Priority support', included: false },
      { text: 'Quarterly strategy call', included: false },
    ],
    ctaText: 'Get Started',
    ctaHref: '/contact/',
  },
  {
    name: 'Growth',
    price: '$499',
    period: '/month',
    description: 'Active SEO improvement and monthly optimization.',
    featured: true,
    features: [
      { text: 'Everything in Essential', included: true },
      { text: '3 hrs/mo content updates', included: true },
      { text: 'Monthly SEO improvements', included: true },
      { text: 'Keyword ranking tracking', included: true },
      { text: 'Detailed performance reports', included: true },
      { text: 'Google Business Profile management', included: true },
      { text: 'Priority support', included: true },
      { text: 'Quarterly strategy call', included: false },
      { text: 'A/B testing & CRO', included: false },
    ],
    ctaText: 'Get Started',
    ctaHref: '/contact/',
  },
  {
    name: 'Premium',
    price: '$799',
    period: '/month',
    description: 'Full digital partner with strategy and growth focus.',
    features: [
      { text: 'Everything in Growth', included: true },
      { text: '6 hrs/mo content updates', included: true },
      { text: 'Advanced analytics & reporting', included: true },
      { text: 'A/B testing & conversion optimization', included: true },
      { text: 'Competitor monitoring', included: true },
      { text: 'Quarterly strategy call', included: true },
      { text: 'Dedicated account manager', included: true },
    ],
    ctaText: 'Get Started',
    ctaHref: '/contact/',
  },
];
