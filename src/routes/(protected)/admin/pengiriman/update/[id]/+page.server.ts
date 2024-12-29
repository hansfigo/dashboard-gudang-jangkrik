import { fail, redirect, type Actions } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { deliveries } from '$lib/server/db/schema';
import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	const deliveryId = Number(event.params.id);
	const deliveryData = await db
		.select()
		.from(deliveries)
		.where(eq(deliveries.id, deliveryId))
		.limit(1);

	return {
		delivery: deliveryData[0],
		title: 'Update Delivery'
	};
}) satisfies PageServerLoad;

export const actions = {
	update: async ({ request, params }) => {
		const formData = await request.formData();
		const id = Number(params.id);
		const date = formData.get('date')?.toString();
		const storeId = formData.get('storeId')?.toString();
		const productId = formData.get('productId')?.toString();
		const amount = formData.get('amount')?.toString();
		const totalPrice = formData.get('totalPrice')?.toString();
		const paymentStatus = formData.get('paymentStatus') === 'true';

		// Validasi
		if (!id || !date || !storeId || !productId || !amount || !totalPrice) {
			return fail(400, { error: 'All fields are required.' });
		}

		// Update pengiriman di tabel deliveries
		await db
			.update(deliveries)
			.set({
				date,
				storeId: parseInt(storeId),
				productId: parseInt(productId),
				amount: parseInt(amount),
				totalPrice: parseInt(totalPrice),
				paymentStatus,
				updatedAt: new Date()
			})
			.where(eq(deliveries.id, id));

		// Redirect setelah berhasil update
		throw redirect(303, '/admin/pengiriman');
	}
} satisfies Actions;
