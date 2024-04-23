import rss from '@astrojs/rss';
import { j as getCollection } from './__CN0_D3ga.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from './index_CWF3X2G3.mjs';

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
