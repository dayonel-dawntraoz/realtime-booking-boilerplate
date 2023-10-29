import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { supabase } from "../../supabase";

export async function GET(context) {
	let { data: items } = await supabase
		.from("Items")
		.select("*");
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: items.map((item) => ({
			...item.data,
			link: `/items/${item.id}/`,
		})),
	});
}
