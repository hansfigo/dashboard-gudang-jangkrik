import { db } from '$lib/server/db';
import { deliveries } from '$lib/server/db/schema';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();

		const date = formData.get('date')?.toString();
		const storeId = formData.get('storeId')?.toString();
		const productId = formData.get('productId')?.toString();
		const amount = formData.get('amount')?.toString();
		const totalPrice = formData.get('totalPrice')?.toString();
		const paymentStatus = formData.get('paymentStatus') === 'true';

		if (!date || !storeId || !productId || !amount || !totalPrice) {
			return { status: 400, body: { error: 'All fields are required.' } };
		}

		await db.insert(deliveries).values({
			date,
			storeId: parseInt(storeId),
			productId: parseInt(productId),
			amount: parseInt(amount),
			totalPrice: parseInt(totalPrice),
			paymentStatus
		});

		throw redirect(303, '/admin/pengiriman');
	}
} satisfies Actions;
