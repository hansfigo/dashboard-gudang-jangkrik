import { fail, redirect, type Actions } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { dailyStock } from '$lib/server/db/schema';
import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	const stockId = Number(event.params.id);
	const stockData = await db.select().from(dailyStock).where(eq(dailyStock.id, stockId)).limit(1);

	return {
		stock: stockData[0],
		title: 'Update Daily Stock'
	};
}) satisfies PageServerLoad;

export const actions = {
	update: async ({ request, params }) => {
		const formData = await request.formData();
		const id = Number(params.id);
		const date = formData.get('date')?.toString();
		const productId = parseInt(formData.get('productId')?.toString() || '', 10);
		const receivedStock = parseInt(formData.get('receivedStock')?.toString() || '', 10);
		const remainingStock = parseInt(formData.get('remainingStock')?.toString() || '0', 10);

		if (!id || !date || isNaN(productId) || isNaN(receivedStock)) {
			return fail(400, { error: 'ID, Date, Product ID, and Received Stock are required.' });
		}

		await db
			.update(dailyStock)
			.set({
				date,
				productId,
				receivedStock,
				remainingStock,
				updatedAt: new Date()
			})
			.where(eq(dailyStock.id, id));

		throw redirect(303, '/admin/stock-harian');
	}
} satisfies Actions;
