"use client";

import { useState } from "react";
import { Settings, Mic, Search, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MediaItem {
  id: string;
  type: string;
  url: string;
}

interface ProfileSidebarProps {
  mediaItems: MediaItem[];
}

export function ProfileSidebar({ mediaItems }: ProfileSidebarProps) {
  const [activeTab, setActiveTab] = useState("media");

  return (
    <div className="w-80 border-l flex flex-col">
      <div className="p-4 flex flex-col items-center border-b">
        <Avatar className="h-24 w-24 mb-3">
          <AvatarImage src="/avatars/ricky.jpg" alt="Ricky Smith" />
          <AvatarFallback>RS</AvatarFallback>
        </Avatar>
        <h2 className="text-xl font-medium">Ricky Smith</h2>
        <p className="text-sm text-gray-500">Online</p>

        <div className="flex gap-4 mt-4">
          <div className="flex flex-col items-center">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full bg-gray-100"
            >
              <Settings className="h-6 w-6" />
            </Button>
            <span className="text-xs mt-1">Profile</span>
          </div>
          <div className="flex flex-col items-center">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full bg-gray-100"
            >
              <Mic className="h-5 w-5" />
            </Button>
            <span className="text-xs mt-1">Mute</span>
          </div>
          <div className="flex flex-col items-center">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full bg-gray-100"
            >
              <Search className="h-5 w-5" />
            </Button>
            <span className="text-xs mt-1">Search</span>
          </div>
        </div>
      </div>

      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Customize Chat</h3>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Info className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="p-4 flex-1 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">Media, Files And Links</h3>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Info className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex border-b">
          <button
            className={`flex-1 py-2 ${
              activeTab === "media"
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("media")}
          >
            Media
          </button>
          <button
            className={`flex-1 py-2 ${
              activeTab === "files"
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("files")}
          >
            Files
          </button>
          <button
            className={`flex-1 py-2 ${
              activeTab === "links"
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("links")}
          >
            Links
          </button>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {mediaItems.map((item) => (
            <div
              key={item.id}
              className="aspect-square bg-gray-200 rounded-md overflow-hidden"
            >
              <img
                src={item.url}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 