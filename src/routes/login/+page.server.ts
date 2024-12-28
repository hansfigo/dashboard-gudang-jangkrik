import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { users } from '$lib/server/db/schema';
import { sql } from 'drizzle-orm';
import { verify } from '@node-rs/argon2';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';

export const load: PageServerLoad = async (event) => {
	if (event.locals.user) {
		return redirect(302, '/');
	}
	return {};
};

export const actions: Actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const username = formData.get('username');
		const password = formData.get('password');

		if (!username) {
			return fail(400, { message: 'Invalid username/email' });
		}
		if (!password) {
			return fail(400, { message: 'Invalid password' });
		}

		const queryUser = await db
			.select()
			.from(users)
			.where(sql`${users.username} = ${username}`);

		if (queryUser.length == 0) {
			return fail(400, { error: true, message: 'User not found' });
		}

		const existingUser = queryUser[0];

		const validPassword = await verify(existingUser.password!, String(password), {
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1
		});
		if (!validPassword) {
			return fail(400, {
				error: true,
				message: 'Incorrect username or password'
			});
		}

		const jwtSecret = JWT_SECRET;

		const expiresIn = 604800;

		const token = jwt.sign(existingUser, jwtSecret, {
			expiresIn: expiresIn
		});

		event.cookies.set('jwt', token, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: true,
			maxAge: expiresIn
		});

		throw redirect(302, '/admin/dashboard');
	}
};
