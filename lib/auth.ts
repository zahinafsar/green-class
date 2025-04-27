import { cookies } from "next/headers";
import { verifyToken } from "./jwt";
import { redirect } from "next/navigation";
import { routes } from "@/routes";

export const auth = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;
    const decodedToken = await verifyToken(token);
    if (!decodedToken) return redirect(routes.auth.login);
    return decodedToken;
}