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
  }),
});

export const collections = { news, portfolio, team };
