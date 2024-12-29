// src/seeder/seedStores.ts

import { db } from '..';
import { stores } from '../schema'; // Ganti dengan path ke schema yang sesuai

const seedStores = async () => {
	const storeData = [
		{
			id: 1,
			name: 'Kios Jaya',
			address: 'Jl. Merdeka No.123, Yogyakarta',
			googlemapslink: 'https://goo.gl/maps/example1',
			phone: '081234567890'
		},
		{
			
			name: 'Toko Subur',
			address: 'Jl. Kemerdekaan No.45, Yogyakarta',
			googlemapslink: 'https://goo.gl/maps/example2',
			phone: '081987654321'
		}
	];

	try {
		for (const store of storeData) {
			await db.insert(stores).values(store);
			console.log(`Store ${store.name} added successfully.`);
		}
	} catch (error) {
		console.error('Error seeding stores:', error);
	}
};

seedStores();
