import rss from '@astrojs/rss';
import { j as getCollection } from './__Cy41gj0q.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from './index_Blmjelam.mjs';

async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}

export { GET };
