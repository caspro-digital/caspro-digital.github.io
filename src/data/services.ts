export interface Service {
  name: string;
  slug: string;
  description: string;
  icon: string;
  href: string;
}

export const services: Service[] = [
  {
    name: 'Web Design & Development',
    slug: 'web-design',
    description:
      'Custom websites built for speed, SEO, and conversions. Every site is mobile-first, lightning fast, and designed to turn visitors into customers.',
    icon: 'monitor',
    href: '/services/web-design/',
  },
  {
    name: 'Search Engine Optimization',
    slug: 'seo',
    description:
      'Data-driven SEO strategies that get your business found on Google. From local search to national rankings, we put you in front of the right people.',
    icon: 'search',
    href: '/services/seo/',
  },
  {
    name: 'Website Management',
    slug: 'website-management',
    description:
      'Hosting, security, updates, and performance monitoring — handled. Your site stays fast, secure, and up-to-date without you lifting a finger.',
    icon: 'shield',
    href: '/services/website-management/',
  },
  {
    name: 'Tech Consulting',
    slug: 'tech-consulting',
    description:
      'Strategic technology guidance for businesses that need more than just a website. We help you choose the right tools, streamline workflows, and make smarter digital decisions.',
    icon: 'lightbulb',
    href: '/services/tech-consulting/',
  },
];
