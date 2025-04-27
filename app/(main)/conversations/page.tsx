"use client";

import { ConversationSidebar } from "./left-sidebar";
import { ChatArea } from "./chat-area";
import { RightSidebar } from "./right-sidebar";
import { useSearchParams } from "next/navigation";

export default function ConversationPage() {
  const searchParams = useSearchParams();
  const roomId = searchParams.get("id");

  return (
    <div className="flex h-full w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <ConversationSidebar />
      <ChatArea roomId={roomId} />
      <RightSidebar />
    </div>
  );
}
