import { db } from '$lib/server/db';
import { stores } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const storeList = await db.select().from(stores);

	return {
		stores: storeList,
		title: 'Kios'
	};
}) satisfies PageServerLoad;
