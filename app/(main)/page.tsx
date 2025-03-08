"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MainPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the first conversation
    router.push("/conversation/1");
  }, [router]);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-2">Welcome to Messenger</h1>
        <p className="text-gray-500">Redirecting to your conversations...</p>
      </div>
    </div>
  );
} 