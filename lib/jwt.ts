import { SignJWT, jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function generateToken(payload: any): Promise<string> {
	const iat = Math.floor(Date.now() / 1000);
	const exp = iat + (60 * 60 * 24 * 30); // 30 days

	return new SignJWT(payload)
		.setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
		.setExpirationTime(exp)
		.setIssuedAt(iat)
		.setNotBefore(iat)
		.sign(new TextEncoder().encode(JWT_SECRET));
}

export async function verifyToken(token: string): Promise<any | null> {
	try {
		const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
		return payload as unknown as any;
	} catch (error) {
		console.error('Error verifying token', error);
		return null;
	}
}