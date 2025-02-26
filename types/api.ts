import { Role } from "@prisma/client";
import bcrypt from "bcryptjs";
import { getUsers } from '@/service/user';
import { createUser } from '@/service/user';

// Auto-generated types for service functions

// Types for getUsers
export namespace GetUsers {
  export type Props = any;
  export type Return = Awaited<ReturnType<typeof getUsers>>;
}

// Types for createUser
export namespace CreateUser {
  export type Props = { email: string; password: string; role?: Role };
  export type Return = Awaited<ReturnType<typeof createUser>>;
}

