import { db } from '$lib/server/db';
import { dailyStock as dailyStockTable, deliveries } from '$lib/server/db/schema';
import { count, eq, sum } from 'drizzle-orm';
import type { PageServerLoad } from '../$types';

export const load = (async (event) => {
	// Mengambil data stok hari ini per produk (Jangkrik dan Ulat Hongkong)
	const todayStock = await db
		.select()
		.from(dailyStockTable)
		.where(eq(dailyStockTable.date, new Date().toISOString().split('T')[0]));

	const totalDelivery = await db
		.select({ count: count() })
		.from(deliveries)
		.where(eq(deliveries.date, new Date().toISOString().split('T')[0]))
		.then((res) => res[0].count);

	const totalRevenue = await db
		.select({ value: sum(deliveries.totalPrice) })
		.from(deliveries)
		.where(eq(deliveries.date, new Date().toISOString().split('T')[0]))
		.then((res) => res[0].value);

	return {
		title: 'Dashboard Page',
		todayStock,
		totalDelivery,
		totalRevenue
	};
}) satisfies PageServerLoad;
