import { db } from '..';
import { dailyStock } from '../schema';

async function seedDailyStock() {
	const today = new Date();
	const todayString = today.toISOString().split('T')[0];

	const seedData = [
		{
			date: '2024-12-27',
			productId: 1,
			receivedStock: 50,
			remainingStock: 30
		},
		{
			date: todayString,
			productId: 2,
			receivedStock: 70,
			remainingStock: 60
		}
	];

	for (const data of seedData) {
		try {
			await db.insert(dailyStock).values(data);
			console.log(`Inserted data for date: ${data.date}`);
		} catch (error) {
			console.error(`Failed to insert data for date: ${data.date}`, error);
		}
	}
}

seedDailyStock()
	.then(() => {
		console.log('Seeding completed.');
		process.exit(0);
	})
	.catch((error) => {
		console.error('Seeding failed.', error);
		process.exit(1);
	});
