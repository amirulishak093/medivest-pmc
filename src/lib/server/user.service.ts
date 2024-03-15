import type { Prisma } from '@prisma/client';
import { db } from './db';

export async function createUser({ data }: Prisma.UserCreateArgs) {
	try {
		return await db.user.create({ data });
	} catch (error) {
		console.error('Error creating user: ', error);
		throw new Error('Failed to create user');
	}
}



