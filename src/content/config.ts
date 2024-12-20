import { defineCollection, reference, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updateDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
    heroImage: image().refine((image) => image.width < 1200, {
      message: 'La imagen de portada debe tener una resolución menor a 1200px',
    }),
    author: reference('author'),
    draft: z.boolean().default(false),
  }),
});

const author = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    name: z.string(),
    avatar: image(),
    instagram: z.string().optional(),
    facebook: z.string().optional(),
    github: z.string().optional(),
    linkedin: z.string().optional(),
    x: z.string().optional(),
  }),
});

export const collections = {
  blog,
  author,
};
