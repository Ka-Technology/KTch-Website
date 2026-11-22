export const site = {
  name: 'Ka Technology',
  legal: 'Ka Technology, LLC',
  url: 'https://ka-tch.com',
  email: 'info@ka-tch.com',
  phone: '971-344-6299',
  phoneHref: 'tel:+19713446299',
  city: 'Portland, Oregon',
  slogan: 'Giving people the power of meaningful choices.',
  description:
    'Ka Technology builds AI tools, custom software and automations for small and growing businesses. Based in Portland, Oregon.',
  // TODO: add real profile URLs. Empty entries are not rendered.
  social: [
    { label: 'LinkedIn', href: '' },
    { label: 'Instagram', href: '' },
  ],
};

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
];

export type Pillar = {
  slug: 'ai' | 'software' | 'web' | 'automation' | 'analytics';
  name: string;
  short: string;
  pitch: string;
  image: string;
  imageAlt: string;
  offerings: { name: string; text: string; example?: { label: string; href: string } }[];
  caseStudy?: { label: string; href: string };      // the proof shown in the home table
  partners?: { name: string; what: string }[];      // clients in this area without a case study
};

export const pillars: Pillar[] = [
  {
    slug: 'ai',
    name: 'AI Applications & Integrations',
    short: 'AI',
    pitch: 'Practical AI that solves real problems, not a chatbot for the sake of it.',
    image: 'svc-ai',
    imageAlt: 'A developer working at two monitors full of code in a dark room.',
    offerings: [
      { name: 'LLM integrations', text: 'AI that already knows your business, so you never have to catch ChatGPT up again.' },
      { name: 'Document AI', text: 'Turn piles of PDFs into structured, verified data.', example: { label: 'CIDA Analytics', href: '/work/cida-analytics' } },
      { name: 'Voice and text agents', text: 'AI that answers calls, follows up on missed calls, and books appointments.' },
      { name: 'ML-based optimization', text: "Find the inefficiencies your team can't see." },
    ],
    caseStudy: { label: 'CIDA Analytics', href: '/work/cida-analytics' },
  },
  {
    slug: 'software',
    name: 'Software Applications',
    short: 'Software',
    pitch: "One size doesn't fit all. We build the tools your business actually needs.",
    image: 'svc-software',
    imageAlt: 'Downtown Portland towers rising above autumn trees.',
    offerings: [
      { name: 'Custom web apps & SaaS', text: 'Software shaped around how you already work.' },
      { name: 'Database design', text: 'Data that’s organized, so it scales with you.' },
      { name: 'API development', text: "Connect the tools that don't talk to each other." },
      { name: 'Tech debt', text: 'Modernize old code before it costs you more.' },
    ],
    caseStudy: { label: 'CIDA Analytics', href: '/work/cida-analytics' },
  },
  {
    slug: 'web',
    name: 'Website Development',
    short: 'Web',
    pitch: 'A website that looks like your business today, not like a template.',
    image: 'third-street-1910',
    imageAlt: 'Third Street in downtown Portland in 1910, lined with shop fronts and awnings.',
    offerings: [
      { name: 'Website design & development', text: 'Great UX and UI, beyond what a template can give you.' },
      { name: 'Redesigns', text: 'Bring an old site up to date, with a personal touch instead of stock photos.', example: { label: 'Scrubs & More', href: '/work/scrubs-and-more' } },
      { name: 'Online shops & donations', text: 'Sell or take donations right from your own site.', example: { label: 'Hopewell Ranch', href: '/work/hopewell-ranch' } },
      { name: 'Forms that reach you', text: 'Quote requests and job applications that land straight in your inbox.', example: { label: 'Milligan’s', href: '/work/milligans' } },
    ],
    caseStudy: { label: 'Scrubs & More', href: '/work/scrubs-and-more' },
    partners: [{ name: 'Kap & Company', what: 'Project partner' }],
  },
  {
    slug: 'automation',
    name: 'Process Automation',
    short: 'Automation',
    pitch: 'Run your business without running your business.',
    image: 'svc-automation',
    imageAlt: 'Two people working on laptops at a shared wooden table.',
    offerings: [
      { name: 'Automated customer outreach', text: 'Make sure your clients feel looked after, automatically.' },
      { name: 'Integrations & centralization', text: 'Data over here, software over there. We put it in one place.' },
      { name: 'Workflow automation', text: 'The repetitive steps, done for you.', example: { label: 'APEX test reports', href: '/work/apex-performance' } },
    ],
    caseStudy: { label: 'APEX Performance', href: '/work/apex-performance' },
  },
  {
    slug: 'analytics',
    name: 'Data Analytics',
    short: 'Analytics',
    pitch: 'Find out what your customers care about.',
    image: 'svc-analytics',
    imageAlt: 'Three people around a table reviewing charts pinned to a whiteboard.',
    offerings: [
      { name: 'Marketing analytics', text: "The five W's: who's interested, why, which groups they fall into, when demand moves, where they are." },
      { name: 'Predictive forecasting', text: "Staff and stock for what's coming." },
      { name: 'Data visualization', text: 'Dashboards your whole team understands.' },
    ],
  },
];

export const serviceLabel: Record<string, string> = {
  ai: 'AI',
  software: 'Software',
  automation: 'Automation',
  analytics: 'Analytics',
  web: 'Web',
};

/* Names for the home-page strip (no Old Republic, no unconfirmed partners). */
export const stripNames = [
  'CIDA Analytics',
  'Keller Williams Eugene-Springfield',
  'Scrubs & More',
  'Cascade Title',
  'Real Accounting',
  'APEX Performance',
  'Hopewell Ranch',
  "Milligan's Landscape & Lawn",
  'Kap & Company',
];

export const img = (name: string, w: 800 | 1600 = 1600) => `/images/${name}-${w}.webp`;
export const srcset = (name: string) => `/images/${name}-800.webp 800w, /images/${name}-1600.webp 1600w`;
