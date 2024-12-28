import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async (event) => {
	if (!event.locals.user) {
		console.log('LU BELUM LOGIN');
		throw redirect(302, '/');
	}

	if (event.locals.user.role != 0) {
		console.log('LU BUKAN ADMIN');
		throw redirect(302, '/');
	}

	return {
		user: event.locals.user
	};
}) satisfies LayoutServerLoad;
