import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string().optional(),
    hero: z.string().optional(),
    externalUrl: z.string().url().optional(),
  }),
});

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    logo: z.string().optional(),
    stage: z.string().optional(),
    summary: z.string(),
    website: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

const teamSection = z.enum(['management', 'board', 'sab', 'strategic']);

const team = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    photo: z.string().optional(),
    // A person can appear in multiple sections (e.g. Anthony Liveris in
    // both Management and Board). Each appearance has its own order.
    sections: z
      .array(
        z.object({
          section: teamSection,
          order: z.number(),
        }),
      )
      .min(1),
    // Optional editorial extensions used by the redesigned /team page (2026-05-04).
    chips: z.array(z.string()).optional(),
    hook: z.string().optional(),
    caption: z.string().optional(),
    chair: z.boolean().optional(),
    // Profile-page fields (added 2026-05-04 for /team/[slug] redesign)
    joinedYear: z.number().optional(),
    joinedDescriptor: z.string().optional(),
    based: z.string().optional(),
    linkedin: z.string().url().optional(),
    press: z.array(z.object({ label: z.string(), url: z.string().url() })).optional(),
    pullQuote: z.object({ text: z.string(), source: z.string() }).optional(),
    affiliations: z.array(z.object({ role: z.string(), org: z.string() })).optional(),
    // SAB / Strategic only
    institution: z.string().optional(),
    areas: z.array(z.string()).optional(),
    education: z.string().optional(),
  }),
});

export const collections = { news, portfolio, team };
