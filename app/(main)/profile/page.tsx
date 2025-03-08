'use client'

import { useAuth } from "@/hooks/auth";

export default function ProfilePage() {
    const { user } = useAuth();
    
    return (
        <div>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    )
}