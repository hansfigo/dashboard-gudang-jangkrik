export interface User {
	id: number;
	role: number;
	full_name: string;
	age: number;
	balance: number;
	username: string;
	email: string;
	password: string;
	profilePicture: string | null;
	createdAt: Date;
	updatedAt: Date;
}

export interface DetailedTransaction {
	id: number;
	user_id: number;
	name: string;
	type: number;
	amount: string;
	category: string;
	description: string;
	createdAt: Date;
	updatedAt: Date;
	users: User;
}
