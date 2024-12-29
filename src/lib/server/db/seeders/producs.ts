// src/seeder/seedProducts.ts
import { db } from '..';
import { products } from '../schema'; // Ganti dengan path ke schema yang sesuai

const seedProducts = async () => {
	const productData = [
		{ id: 1, name: 'Jangkrik Genggong' },
		{ id: 2, name: 'Jangkrik Bering' },
		{ id: 3, name: 'Ulat Jerman' },
		{ id: 4, name: 'Ulat Hongkong' }
	];

	try {
		for (const product of productData) {
			await db.insert(products).values(product);
			console.log(`Product ${product.name} added successfully.`);
		}
	} catch (error) {
		console.error('Error seeding products:', error);
	}
};

seedProducts();
