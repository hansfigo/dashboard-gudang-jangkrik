import db from '../../../../lib/server/db';
import type { PageServerLoad } from './$types';



export const load = (async () => {
	try {
		const result = await db.query.transactions.findMany({
			with: {
				users: true
			}
		});
		return { transactions: result };
	} catch (error) {
		console.log(error, ' ERROR');
		return { transactions: [] };
	}
}) satisfies PageServerLoad;
