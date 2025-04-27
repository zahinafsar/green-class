"use client";

import { useState } from "react";
import { Plus, Search } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { CreateSectionModal } from "./create";
import { useQuery } from "@tanstack/react-query";
import { getConversations } from "./actions";
import Link from "next/link";
import { routes } from "@/routes";
import { generateAvatar } from "@/lib/conversation";

export function ConversationSidebar() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const query = useQuery({
    queryKey: ["sections"],
    queryFn: async () => {
      const res = await getConversations();
      return res;
    },
  });

  return (
    <>
      <div className="w-80 border-r flex flex-col">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Chats</h1>
            <button
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
              onClick={() => setIsDialogOpen(true)}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-4 relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search Messenger..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {/* <nav className="flex border-b px-4 py-2">
            <button className="flex-1 text-gray-500 py-2">Sections</button>
            <button className="flex-1 text-gray-500 py-2">Groups</button>
            <button className="flex-1 text-gray-500 py-2">Archive</button>
          </nav> */}
          <div className="py-2">
            {query.data?.map((room) => (
              <Link href={routes.conversation.single(room.id)} key={room.id}>
                <div
                  className={`flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer ${
                    !room.id ? "bg-green-50" : ""
                  }`}
                >
                  <div className="relative">
                    <Avatar className="h-12 w-12 border border-black">
                      <AvatarImage
                        src={generateAvatar(generateConversationName(room))}
                        alt={generateConversationName(room)}
                      />
                    </Avatar>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <p className="font-medium truncate">
                        {generateConversationName(room)}
                      </p>
                      <span className="text-xs text-gray-500">2 hours ago</span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">
                      How are you doing today?
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <CreateSectionModal
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onUpdate={query.refetch}
      />
    </>
  );
}

const generateConversationName = (
  room: Awaited<ReturnType<typeof getConversations>>[number]
) => {
  if (room.section) {
    return `${room.section.batch}-${room.section.courseCode}-${room.section.section}`;
  }
  if (room.userRoom.length > 0) {
    return (
      room.userRoom[0].user.student?.fullName ??
      room.userRoom[0].user.faculty?.fullName ??
      "Unknown"
    );
  }
  return "Unknown";
};
