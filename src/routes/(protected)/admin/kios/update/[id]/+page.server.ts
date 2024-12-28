import { fail, redirect, type Actions } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { stores } from '$lib/server/db/schema';
import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	const storeid = Number(event.params.id);
	const storeData = await db.select().from(stores).where(eq(stores.id, storeid)).limit(1);

	return {
		store: storeData[0],
		title: 'Update Store'
	};
}) satisfies PageServerLoad;

export const actions = {
	update: async ({ request, params }) => {
		const formData = await request.formData();
		const id = Number(params.id);
		const name = formData.get('name')?.toString();
		const address = formData.get('address')?.toString();
		const phone = formData.get('phone')?.toString();
		const googlemapslink = formData.get('googlemapslink')?.toString();

		if (!id || !name || !address || !phone) {
			return fail(400, { error: 'All fields are required.' });
		}

		await db
			.update(stores)
			.set({
				name,
				address,
				phone,
				googlemapslink,
				updatedAt: new Date()
			})
			.where(eq(stores.id, id));

		throw redirect(303, '/kios');
	}
} satisfies Actions;
