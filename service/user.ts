import { prisma } from "@/lib/prisma";
import { Role } from "@prisma/client";
import bcrypt from "bcryptjs";

export const getUsers = async () => {
	try {
		return await prisma.user.findMany();
	} catch (error) {
		console.error('Error fetching users:', error);
		throw error;
	}
}

export const createUser = async (data: { email: string; password: string; role?: Role }) => {
	try {
		const { email, password, role = 'STUDENT' } = data;

		if (!email || !password) {
			throw new Error('Email and password are required');
		}

		const existingUser = await prisma.user.findUnique({
			where: { email }
		});

		if (existingUser) {
			throw new Error('User already exists');
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const user = await prisma.user.create({
			data: {
				email,
				password: hashedPassword,
				role
			}
		});

		const { password: _, ...userWithoutPassword } = user;

		return userWithoutPassword;
	} catch (error) {
		console.error('Error creating user:', error);
		throw error;
	}
}