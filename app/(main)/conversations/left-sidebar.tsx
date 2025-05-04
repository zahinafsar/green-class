"use client";

import { useState } from "react";
import { Loader2, Plus, Search, X } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { CreateSectionModal } from "./create";
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getConversations,
  joinSectionRoom,
} from "./actions";
import Link from "next/link";
import { routes } from "@/routes";
import { formatDistance } from "date-fns";
import { generateAvatar } from "@/lib/conversation";
import { debounce } from "lodash";
import { Button } from "@/components/ui/button";

export function ConversationSidebar() {
  const [search, setSearch] = useState("");
  const [searchConversations, setSearchConversations] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const myConversations = useQuery({
    queryKey: ["my-conversations"],
    queryFn: async () => {
      const res = await getConversations();
      return res;
    },
  });

  const newConversations = useQuery({
    queryKey: ["new-conversations", search],
    queryFn: async () => {
      const res = await getConversations({ search });
      return res;
    },
  });

  const joinMutation = useMutation({
    mutationFn: joinSectionRoom,
    onSuccess: () => {
      myConversations.refetch();
    },
  });

  const debouncedSetSearch = debounce((value: string) => {
    setSearch(value);
  }, 300);

  const allConversations = searchConversations
    ? newConversations.data
    : myConversations.data;

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
            {searchConversations && (
              <button
                onClick={() => {
                  setSearchConversations(false);
                  setSearch("");
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            <input
              type="text"
              placeholder="Search Conversations..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm"
              defaultValue={search}
              onFocus={() => setSearchConversations(true)}
              onChange={(e) => debouncedSetSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="py-2">
            {allConversations?.map((room) => (
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
                      <span className="text-xs text-gray-500">
                        {formatDistance(
                          new Date(),
                          new Date(room.messages?.[0]?.createdAt ?? new Date())
                        )}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">
                      {removeHtmlTags(room.messages?.[0]?.content ?? "")}
                    </p>
                  </div>
                  {searchConversations &&
                    !myConversations.data?.find((c) => c.id === room.id) && (
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={joinMutation.isPending}
                        className="ml-2 text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          joinMutation.mutate(room.id);
                        }}
                      >
                        Join
                      </Button>
                    )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <CreateSectionModal
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onUpdate={myConversations.refetch}
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

const removeHtmlTags = (text: string) => {
  return text.replace(/<[^>]*>?/g, "");
};
