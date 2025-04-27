import { getAuthUrl } from "@/lib/google";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function GoogleAuth() {
  const [isLoading, setIsLoading] = useState(false);

  const handleConnect = async () => {
    if (isLoading) return;
    try {
      setIsLoading(true);
      const authUrl = await getAuthUrl();
      window.location.href = authUrl;
    } catch (error) {
      console.error("Failed to get auth URL:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="w-full flex flex-col items-center justify-center px-10 cursor-pointer"
      onClick={handleConnect}
    >
      <Image src="/classroom.png" alt="Google" width={64} height={64} />
      <Button disabled={isLoading} className="w-full mt-6">
        {isLoading ? "Connecting..." : "Connect Classroom"}
      </Button>
    </div>
  );
}
