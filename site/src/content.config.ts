import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const pillars = z.enum(['ai', 'software', 'automation', 'analytics', 'web']);

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    industry: z.string(),
    location: z.string().optional(),
    year: z.string(),
    services: z.array(pillars),
    status: z.enum(['Current', 'Completed']),
    summary: z.string(),
    challenge: z.string(),
    results: z.array(z.string()).default([]),
    tech: z.array(z.string()).default([]),
    quote_id: z.string().optional(),
    cover_image: z.string(),
    cover_alt: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    status: z.enum(['Beta', 'Live', 'In use', 'Retired', 'Past project']),
    url: z.string().optional(),
    year: z.string(),
    summary: z.string(),
    problem: z.string(),
    how_it_works: z.array(z.string()).default([]),
    features: z.array(z.string()).default([]),
    tech: z.array(z.string()).default([]),
    cta_label: z.string().optional(),
    cta_url: z.string().optional(),
    logo: z.string().optional(),
    order: z.number().default(99),
    hidden: z.boolean().default(false),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    bio: z.string(),
    photo: z.string().optional(),
    linkedin: z.string().optional(),
    order: z.number().default(99),
    current: z.boolean().default(true),
  }),
});

const jobs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/jobs' }),
  schema: z.object({
    title: z.string(),
    type: z.string(),
    location: z.string(),
    summary: z.string(),
    open: z.boolean().default(true),
  }),
});

const testimonials = defineCollection({
  loader: file('./src/content/testimonials.json'),
  schema: z.object({
    id: z.string(),
    quote: z.string(),
    name: z.string(),
    title: z.string(),
    company: z.string(),
    photo: z.string(),
    project: z.string(),
    source: z.string().optional(),
  }),
});

export const collections = { projects, products, team, jobs, testimonials };
