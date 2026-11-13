import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    order: z.number(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    live: z.string().url().optional(),
    source: z.string().url().optional(),
  }),
});

export const collections = { projects };
