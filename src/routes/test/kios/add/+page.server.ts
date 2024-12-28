import { fail, redirect, type Actions } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { stores } from '$lib/server/db/schema';
import { db } from '$lib/server/db';

export const actions = {
	// Create a new store
	create: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name')?.toString();
		const address = formData.get('address')?.toString();
		const phone = formData.get('phone')?.toString();
		const googlemapslink = formData.get('googlemapslink')?.toString();

		if (!name || !address || !phone) {
			return fail(400, { error: 'All fields are required.' });
		}

		await db.insert(stores).values({
			name,
			address,
			phone,
			googlemapslink
		});
	}

	// Update a store
	// update: async ({ request }) => {
	// 	const formData = await request.formData();
	// 	const id = Number(formData.get('id'));
	// 	const name = formData.get('name');
	// 	const address = formData.get('address');
	// 	const phone = formData.get('phone');
	// 	const preference = Number(formData.get('preference'));

	// 	if (!id || !name || !address || !phone || isNaN(preference)) {
	// 		return fail(400, { error: 'All fields are required.' });
	// 	}

	// 	await db
	// 		.update(stores)
	// 		.set({
	// 			name,
	// 			address,
	// 			phone,
	// 			preference
	// 		})
	// 		.where(eq(stores.id, id));

	// 	throw redirect(303, '/stores');
	// },

	// // Delete a store
	// delete: async ({ request }) => {
	// 	const formData = await request.formData();
	// 	const id = Number(formData.get('id'));

	// 	if (!id) {
	// 		return fail(400, { error: 'Invalid ID.' });
	// 	}

	// 	await db.delete(stores).where(eq(stores.id, id));

	// 	throw redirect(303, '/stores');
	// }
} satisfies Actions;
