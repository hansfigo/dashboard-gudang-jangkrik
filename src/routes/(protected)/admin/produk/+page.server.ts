import { db } from '$lib/server/db';
import { products as productsSchema } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
	const products = await db.select().from(productsSchema);
	return {
		title: 'Produk',
		products
	};
}) satisfies PageServerLoad;

export const actions = {
	delete: async (event) => {
		const formData = await event.request.formData();
		const id = Number(formData.get('id'));
		await db.delete(productsSchema).where(eq(productsSchema.id, id));
		return { status: 303, redirect: '/admin/produk' };
	}
} satisfies Actions;
