import { fail, redirect, type Actions } from '@sveltejs/kit';
import { dailyStock } from '$lib/server/db/schema';
import { db } from '$lib/server/db';

export const actions = {
	create: async ({ request }) => {
		const formData = await request.formData();
		const date = formData.get('date')?.toString();
		const productId = parseInt(formData.get('productId')?.toString() || '', 10);
		const receivedStock = parseInt(formData.get('receivedStock')?.toString() || '', 10);
		const remainingStock = parseInt(formData.get('remainingStock')?.toString() || '0', 10);

		if (!date || isNaN(productId) || isNaN(receivedStock)) {
			return fail(400, { error: 'Date, Product ID, and Received Stock are required.' });
		}

		await db.insert(dailyStock).values({
			date,
			productId,
			receivedStock,
			remainingStock
		});

		throw redirect(303, '/admin/stok-harian');
	}
} satisfies Actions;
