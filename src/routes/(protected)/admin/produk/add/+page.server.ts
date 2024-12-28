import { db } from '$lib/server/db';
import { products } from '$lib/server/db/schema';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const name = formData.get('name')?.toString();

		if (!name) {
			return { status: 400, body: { error: 'All fields are required.' } };
		}

		await db.insert(products).values({ name });

		throw redirect(303, '/admin/produk');
	}
} satisfies Actions;
