import React from "react";
import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import { 
  MessageSquare, 
  Users, 
  ShoppingBag, 
  Bell, 
  Archive, 
  Search, 
  Video, 
  PenSquare, 
  Settings 
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const navigationItems = [
    { icon: <MessageSquare className="h-5 w-5" />, label: "Chat", href: "/" },
    { icon: <Users className="h-5 w-5" />, label: "People", href: "/people" },
    { icon: <ShoppingBag className="h-5 w-5" />, label: "Shop", href: "/shop" },
    { icon: <Bell className="h-5 w-5" />, label: "Requests", href: "/requests" },
    { icon: <Archive className="h-5 w-5" />, label: "Archive", href: "/archive" },
  ];

  return (
    <div className={`flex flex-col h-full border-r ${className}`}>
      <div className="p-4 flex items-center justify-between border-b">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
            <MessageSquare className="h-4 w-4" />
          </div>
          <h1 className="text-xl font-semibold">Chats</h1>
        </Link>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <Video className="h-4 w-4" />
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <PenSquare className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      <div className="p-3">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search Messenger..." 
            className="w-full py-2 px-4 pl-10 bg-gray-100 rounded-full text-sm"
          />
          <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>
      
      <nav className="px-2 py-3">
        <ul className="space-y-1">
          {navigationItems.map((item) => (
            <li key={item.label}>
              <Link 
                href={item.href}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
              >
                <span className="w-8 h-8 flex items-center justify-center">
                  {item.icon}
                </span>
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-3 border-t mt-auto">
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8">
            <div className="w-full h-full rounded-full bg-orange-300 flex items-center justify-center text-white">
              V
            </div>
          </Avatar>
          <span className="font-medium">Vivien</span>
          <button className="ml-auto w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <Settings className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}; 