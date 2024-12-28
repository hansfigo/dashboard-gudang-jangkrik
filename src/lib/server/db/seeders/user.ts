import { hash } from '@node-rs/argon2';
import { db } from '..';
import { users } from '../schema';

async function passwordHash(pass: string) {
	return await hash(pass, {
		memoryCost: 19456,
		timeCost: 2,
		outputLen: 32,
		parallelism: 1
	});
}

const seedStores = async () => {
	const usersData = [
		{
			username: 'admin',
			password: await passwordHash('123'),
			role: 0,
			email: 'admin@me.com',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			username: 'user1',
			password: await passwordHash('123'),
			role: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		}
	];

	try {
		for (const user of usersData) {
			await db.insert(users).values(user);
		}
	} catch (error) {
		console.error('Error seeding stores:', error);
	}
};

seedStores();
