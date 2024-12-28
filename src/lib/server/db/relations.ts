// import { relations } from 'drizzle-orm/relations';
// import { transactions, transactionItems, users, userFinancialProfile } from './schema';

// export const transactionItemsRelations = relations(transactionItems, ({ one }) => ({
// 	transaction: one(transactions, {
// 		fields: [transactionItems.transactionId],
// 		references: [transactions.id]
// 	})
// }));

// export const transactionsRelations = relations(transactions, ({ one, many }) => ({
// 	transactionItems: many(transactionItems),
// 	user: one(users, {
// 		fields: [transactions.userId],
// 		references: [users.id]
// 	})
// }));

// export const usersRelations = relations(users, ({ many }) => ({
// 	transactions: many(transactions),
// 	userFinancialProfiles: many(userFinancialProfile)
// }));

// export const userFinancialProfileRelations = relations(userFinancialProfile, ({ one }) => ({
// 	user: one(users, {
// 		fields: [userFinancialProfile.userId],
// 		references: [users.id]
// 	})
// }));
