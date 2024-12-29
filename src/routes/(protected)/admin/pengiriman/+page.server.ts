import { db } from '$lib/server/db';
import { deliveries, stores, products } from '$lib/server/db/schema';
import { sql } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { eq } from 'drizzle-orm';

export const load = (async (event) => {
	const query = event.url.searchParams.get('date');

	console.log(query);

	if (query) {
		const deliveryData = await db
			.select({
				id: deliveries.id,
				date: deliveries.date,
				storeName: stores.name,
				productName: products.name,
				amount: deliveries.amount,
				totalPrice: deliveries.totalPrice,
				paymentStatus: deliveries.paymentStatus
			})
			.from(deliveries)
			.leftJoin(stores, eq(deliveries.storeId, stores.id))
			.leftJoin(products, eq(deliveries.productId, products.id))
			.where(eq(deliveries.date, query))
			.orderBy(sql`${deliveries.date} DESC`);

		return {
			title: 'Delivery List',
			deliveries: deliveryData
		};
	}

	const deliveryData = await db
		.select({
			id: deliveries.id,
			date: deliveries.date,
			storeName: stores.name,
			productName: products.name,
			amount: deliveries.amount,
			totalPrice: deliveries.totalPrice,
			paymentStatus: deliveries.paymentStatus
		})
		.from(deliveries)
		.leftJoin(stores, eq(deliveries.storeId, stores.id))
		.leftJoin(products, eq(deliveries.productId, products.id))
		.orderBy(sql`${deliveries.date} DESC`);

	return {
		title: 'Delivery List',
		deliveries: deliveryData
	};
}) satisfies PageServerLoad;
