import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string(),
		imageAlt: z.string().optional(), //Fix the error. Disable optional to view error
		tags: z.array(z.string()),
		link: z.string(),
		category: z.string(),
	}),
	
});
const premium_blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()),
		link: z.string(),
		category: z.string(),
		

	}),
	
});


export const collections = {
	'blog': blog,
	'premium_blog': premium_blog,
};
