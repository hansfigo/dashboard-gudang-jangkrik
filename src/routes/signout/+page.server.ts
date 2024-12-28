import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	event.cookies.delete('jwt', { path: '/' });

	throw redirect(302, '/');
}) satisfies PageServerLoad;
