import { db } from '$lib/server/db';
import { stores } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async (event) => {
		const id = Number(event.params.id);

		await db.delete(stores).where(eq(stores.id, id));

		throw redirect(302, '/admin/kios');
	}
} satisfies Actions;