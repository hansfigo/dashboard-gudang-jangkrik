// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			user: any;
			session: import('$lib/server/auth').SessionValidationResult['session'];
			token: import('jsonwebtoken').JwtPayload | string;
		}
	}
}

export {};
