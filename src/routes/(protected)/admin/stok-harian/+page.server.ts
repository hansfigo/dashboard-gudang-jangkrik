import { db } from '$lib/server/db';
import { dailyStock } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const stokHarian = await db.select().from(dailyStock);
	return {
		title: 'Stok Harian',
		stokHarian
	};
}) satisfies PageServerLoad;
