import { createUser, getUsers } from "@/service/user";
import { NextRequest } from "next/server";

export async function GET(_req: NextRequest) {
	try {
		const users = await getUsers();
		return Response.json(users, { status: 200 });
	} catch (error) {
		console.error('Error fetching users:', error);
		return Response.json({ error: 'Internal server error' }, { status: 500 });
	}
}

export async function POST(req: NextRequest) {
	try {
		const data = await req.json();
		const user = await createUser(data);
		return Response.json(user, { status: 201 });
	} catch (error) {
		if (error instanceof Error) {
			return Response.json({ error: error.message }, { status: 400 });
		}
		return Response.json({ error: 'Internal server error' }, { status: 500 });
	}
}