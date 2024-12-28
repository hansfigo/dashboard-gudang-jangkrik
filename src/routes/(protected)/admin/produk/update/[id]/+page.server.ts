import { db } from '$lib/server/db';
import { products } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async (event) => {
	const id = Number(event.params.id);
	const productData = await db.select().from(products).where(eq(products.id, id)).limit(1);

	return {
		product: productData[0],
		title: 'Update Store'
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request, params }) => {
		const formData = await request.formData();
		const id = Number(params.id);
		const name = formData.get('name')?.toString();

		if (!id || !name) {
			return { status: 400, body: { error: 'All fields are required.' } };
		}

		await db
			.update(products)
			.set({
				name,
				updatedAt: new Date()
			})
			.where(eq(products.id, id));

		throw redirect(303, '/admin/produk');
	}
};
