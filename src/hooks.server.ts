import type { Handle } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';
import process from 'process';

process.on('SIGINT', () => {
	process.exit();
});
process.on('SIGTERM', () => {
	process.exit();
});

const handleAuth: Handle = async ({ event, resolve }) => {
	const cookies = event.cookies.get('jwt');

	if (cookies) {
		const user = jwt.verify(cookies, JWT_SECRET);

		if (user) {
			event.locals.user = user;
		}
	}
	return resolve(event);
};

export const handle: Handle = handleAuth;
