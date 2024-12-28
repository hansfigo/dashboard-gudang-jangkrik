import { db } from '$lib/server/db';
import { products } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async (event) => {
		const id = Number(event.params.id);

		await db.delete(products).where(eq(products.id, id));

		throw redirect(302, '/admin/produk');
	}
} satisfies Actions;
