export interface Service {
  name: string;
  slug: string;
  description: string;
  icon: string;
  href: string;
  startingPrice: string;
}

export const services: Service[] = [
  {
    name: 'Website Builds',
    slug: 'website-builds',
    description:
      'Custom websites designed to rank on Google and convert visitors into customers. Mobile-first, lightning fast, with SEO baked into every page. Includes hosting, security, and ongoing management.',
    icon: 'monitor',
    href: '/services/',
    startingPrice: 'From $2,500 + $199/mo',
  },
  {
    name: 'Website Growth & Management',
    slug: 'growth-management',
    description:
      'Already have a website? We take over hosting, security, updates, SEO improvements, and monthly performance reporting. Your site gets better every single month without you lifting a finger.',
    icon: 'trending-up',
    href: '/services/#growth',
    startingPrice: 'From $299/mo',
  },
];
