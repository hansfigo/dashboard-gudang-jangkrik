import {
	pgTable,
	serial,
	text,
	integer,
	date,
	timestamp,
	boolean,
	varchar
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	email: varchar('email').unique(),
	username: varchar('username').notNull().unique(),
	password: text('password').notNull(),
	role: integer('role').notNull(),
	createdAt: timestamp('created_at').default(sql`NOW()`),
	updatedAt: timestamp('updated_at')
		.default(sql`NOW()`)
		.$onUpdate(() => sql`NOW()`)
});

export const products = pgTable('products', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	createdAt: timestamp('created_at').default(sql`NOW()`),
	updatedAt: timestamp('updated_at')
		.default(sql`NOW()`)
		.$onUpdate(() => sql`NOW()`)
});

export const stores = pgTable('stores', {
	id: serial('id').primaryKey(),
	name: varchar('name').notNull(),
	address: text('address').notNull(),
	googlemapslink: text('googlemapslink').default(''),
	phone: text('phone').notNull(),
	createdAt: timestamp('created_at').default(sql`NOW()`),
	updatedAt: timestamp('updated_at')
		.default(sql`NOW()`)
		.$onUpdate(() => sql`NOW()`)
});

export const dailyStock = pgTable('daily_stock', {
	id: serial('id').primaryKey(),
	date: date('date').notNull().unique(),
	productId: integer('product_id').references(() => products.id),
	receivedStock: integer('received_stock').notNull(),
	remainingStock: integer('remaining_stock').default(0),
	createdAt: timestamp('created_at').default(sql`NOW()`),
	updatedAt: timestamp('updated_at')
		.default(sql`NOW()`)
		.$onUpdate(() => sql`NOW()`)
});

export const deliveries = pgTable('deliveries', {
	id: serial('id').primaryKey(),
	date: date('date').notNull(),
	storeId: integer('store_id').references(() => stores.id),
	productId: integer('product_id').references(() => products.id),
	amount: integer('amount').notNull(),
	totalPrice: integer('total_price').notNull(),
	paymentStatus: boolean('payment_status').default(false),
	createdAt: timestamp('created_at').default(sql`NOW()`),
	updatedAt: timestamp('updated_at')
		.default(sql`NOW()`)
		.$onUpdate(() => sql`NOW()`)
});
