import type { PageServerLoad } from '../$types';

export const load = (async (event) => {
	return {
		title: 'Dasboard Page'
	};
}) satisfies PageServerLoad;
