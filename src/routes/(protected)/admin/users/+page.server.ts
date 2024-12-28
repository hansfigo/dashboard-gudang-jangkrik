import {db} from '$lib/server/db';
import { users } from '../../../../lib/server/db/schema';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	try {
		const userList = await db.select().from(users);
		return { users: userList };
	} catch (error) {
		console.log('error', error);
		return { status: 500, body: { error: 'Error Occured' } };
	}
}) satisfies PageServerLoad;
