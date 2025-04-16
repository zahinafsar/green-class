"use client";

import { useState } from "react";
import { Search, Video } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CreateSectionModal } from "./create-section-modal";

interface Contact {
  id: string;
  name: string;
  image: string;
  lastMessage: string;
  time: string;
  active?: boolean;
}

interface ConversationSidebarProps {
  contacts: Contact[];
}

export function ConversationSidebar({ contacts }: ConversationSidebarProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="w-80 border-r flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Chats</h1>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <Video className="h-4 w-4" />
            </button>
            <CreateSectionModal 
              isOpen={isDialogOpen} 
              onOpenChange={setIsDialogOpen} 
            />
          </div>
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
        <nav className="flex border-b px-4 py-2">
          <button className="flex-1 text-gray-500 py-2">Sections</button>
          <button className="flex-1 text-gray-500 py-2">Groups</button>
          <button className="flex-1 text-gray-500 py-2">Archive</button>
        </nav>

        <div className="py-2">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer ${
                contact.active ? "bg-green-50" : ""
              }`}
            >
              <div className="relative">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={contact.image} alt={contact.name} />
                  <AvatarFallback>
                    {contact.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                {contact.active && (
                  <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <p className="font-medium truncate">{contact.name}</p>
                  <span className="text-xs text-gray-500">
                    {contact.time}
                  </span>
                </div>
                <p className="text-sm text-gray-500 truncate">
                  {contact.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 