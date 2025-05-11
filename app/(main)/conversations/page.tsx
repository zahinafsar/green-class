import { ConversationSidebar } from "./left-sidebar";
import { ChatArea } from "./chat-area";
import { RightSidebar } from "./right-sidebar";
import { Suspense } from "react";

export default function ConversationPage() {
  return (
    <div className="flex h-full w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <Suspense>
        <ConversationSidebar />
        <ChatArea />
        <RightSidebar />
      </Suspense>
    </div>
  );
}
