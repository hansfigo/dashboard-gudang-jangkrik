import { db } from '$lib/server/db';
import { deliveries } from '$lib/server/db/schema';

async function seedDeliveries() {
	try {
		const deliveryData = [
			{
				date: new Date('2024-12-25').toISOString(),
				storeId: 1,
				productId: 1,
				amount: 50,
				totalPrice: 100000,
				paymentStatus: true
			},
			{
				date: new Date('2024-12-26').toISOString(),
				storeId: 2,
				productId: 2,
				amount: 30,
				totalPrice: 60000,
				paymentStatus: false
			},
			{
				date: new Date('2024-12-27').toISOString(),
				storeId: 2,
				productId: 3,
				amount: 20,
				totalPrice: 40000,
				paymentStatus: true
			},
			{
				date: new Date().toISOString(),
				storeId: 1,
				productId: 2,
				amount: 10,
				totalPrice: 20000,
				paymentStatus: false
			}
		];

		await db.insert(deliveries).values(deliveryData);

		console.log('Seeding deliveries completed successfully!');
	} catch (error) {
		console.error('Error seeding deliveries:', error);
	}
}

// Jalankan fungsi seeder
seedDeliveries();
