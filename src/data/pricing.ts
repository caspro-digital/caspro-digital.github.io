export interface PricingFeature {
  text: string;
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
      { text: 'Custom website (5–8 pages)' },
      { text: 'Mobile-first responsive design' },
      { text: 'SEO foundation & schema markup' },
      { text: 'Contact forms & lead capture' },
      { text: 'Managed hosting & SSL' },
      { text: 'Security monitoring & backups' },
      { text: '1 hr/mo content updates' },
      { text: 'Google Analytics setup' },
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
      { text: 'Custom website (8–15 pages)' },
      { text: 'Mobile-first responsive design' },
      { text: 'Advanced SEO & local optimization' },
      { text: 'Blog & content management' },
      { text: 'Booking or lead-form integration' },
      { text: 'Managed hosting & SSL' },
      { text: 'Security monitoring & backups' },
      { text: '3 hrs/mo content updates' },
      { text: 'Monthly SEO & performance reports' },
      { text: 'Google Business Profile setup' },
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
      { text: 'Everything in Growth' },
      { text: 'E-commerce or custom functionality' },
      { text: 'Advanced analytics & strategy' },
      { text: 'Content creation & calendar' },
      { text: 'Conversion rate optimization' },
      { text: 'Competitor monitoring' },
      { text: '6 hrs/mo content updates' },
      { text: 'Quarterly strategy calls' },
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
      { text: 'Managed hosting & SSL' },
      { text: 'Daily backups' },
      { text: 'Security & uptime monitoring' },
      { text: '1 hr/mo content updates' },
      { text: 'Monthly analytics snapshot' },
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
      { text: 'Everything in Essential' },
      { text: '3 hrs/mo content updates' },
      { text: 'Monthly SEO improvements' },
      { text: 'Keyword ranking tracking' },
      { text: 'Detailed performance reports' },
      { text: 'Google Business Profile management' },
      { text: 'Priority support' },
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
      { text: 'Everything in Growth' },
      { text: '6 hrs/mo content updates' },
      { text: 'Advanced analytics & reporting' },
      { text: 'A/B testing & conversion optimization' },
      { text: 'Competitor monitoring' },
      { text: 'Quarterly strategy call' },
      { text: 'Dedicated account manager' },
    ],
    ctaText: 'Get Started',
    ctaHref: '/contact/',
  },
];
