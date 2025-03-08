"use client";

import { Message } from "@/components/chat/message";
import { ChatInput } from "@/components/chat/chat-input";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Search,
  Phone,
  Video,
  Info,
  Paperclip,
  Image,
  Smile,
  Send,
  Mic,
  Settings,
} from "lucide-react";
import Link from "next/link";

// Sample data - replace with your actual data source
const initialMessages = [
  {
    id: "1",
    content: "Hi! How are you? 😊",
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
    sender: {
      id: "user1",
      name: "Ricky Smith",
      image: "/avatars/ricky.jpg",
    },
  },
  {
    id: "2",
    content: "Hey Ricky! I'm Feeling Amazing, how about you?",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    sender: {
      id: "current-user",
      name: "You",
      image: "/avatars/you.jpg",
    },
  },
  {
    id: "3",
    content: "That's a cool idea! 😄",
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
    sender: {
      id: "current-user",
      name: "You",
      image: "/avatars/you.jpg",
    },
  },
  {
    id: "4",
    content: "Hey, so happy you are down!",
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    sender: {
      id: "user1",
      name: "Ricky Smith",
      image: "/avatars/ricky.jpg",
    },
  },
];

const contacts = [
  {
    id: "1",
    name: "Ricky Smith",
    image: "/avatars/ricky.jpg",
    lastMessage: "YOO, Okay. Let's get this...",
    time: "1min ago",
    active: true,
  },
  {
    id: "2",
    name: "Stephanie Sharkey",
    image: "/avatars/stephanie.jpg",
    lastMessage: "YOO, Okay. Let's get this...",
    time: "1min ago",
  },
  {
    id: "3",
    name: "Rodger Struck",
    image: "/avatars/rodger.jpg",
    lastMessage: "YOO, Okay. Let's get this...",
    time: "1min ago",
  },
  {
    id: "4",
    name: "Jerry Helfer",
    image: "/avatars/jerry.jpg",
    lastMessage: "YOO, Okay. Let's get this...",
    time: "1min ago",
  },
  {
    id: "5",
    name: "James Hall",
    image: "/avatars/james.jpg",
    lastMessage: "YOO, Okay. Let's get this...",
    time: "1min ago",
  },
  {
    id: "6",
    name: "Lorri Warf",
    image: "/avatars/lorri.jpg",
    lastMessage: "YOO, Okay. Let's get this...",
    time: "1min ago",
  },
  {
    id: "7",
    name: "Frances Swann",
    image: "/avatars/frances.jpg",
    lastMessage: "YOO, Okay. Let's get this...",
    time: "1min ago",
  },
  {
    id: "8",
    name: "Stephanie Nicol",
    image: "/avatars/stephanie-n.jpg",
    lastMessage: "YOO, Okay. Let's get this...",
    time: "1min ago",
  },
  {
    id: "9",
    name: "Kathy Pacheco",
    image: "/avatars/kathy.jpg",
    lastMessage: "YOO, Okay. Let's get this...",
    time: "1min ago",
  },
  {
    id: "10",
    name: "Mary Freund",
    image: "/avatars/mary.jpg",
    lastMessage: "YOO, Okay. Let's get this...",
    time: "1min ago",
  },
];

const mediaItems = [
  { id: "1", type: "image", url: "/media/image1.jpg" },
  { id: "2", type: "image", url: "/media/image2.jpg" },
  { id: "3", type: "image", url: "/media/image3.jpg" },
  { id: "4", type: "image", url: "/media/image4.jpg" },
  { id: "5", type: "image", url: "/media/image5.jpg" },
  { id: "6", type: "image", url: "/media/image6.jpg" },
  { id: "7", type: "image", url: "/media/image7.jpg" },
  { id: "8", type: "image", url: "/media/image8.jpg" },
  { id: "9", type: "image", url: "/media/image9.jpg" },
];

export default function ConversationPage() {
  const router = useRouter();
  const [messages, setMessages] = useState(initialMessages);
  const [activeTab, setActiveTab] = useState("media");

  // For demo purposes, we'll just use a string literal
  // In a real app, you would use useSession() from next-auth/react
  // const { status } = useSession()
  const status = "authenticated";

  // We'll skip the authentication check for this demo
  // useEffect(() => {
  //   if (status === "unauthenticated") {
  //     router.push("/login")
  //   }
  // }, [status, router])

  // if (status === "loading") {
  //   return <div className="flex h-screen items-center justify-center">Loading...</div>
  // }

  const handleSendMessage = (content: string) => {
    const newMessage = {
      id: Date.now().toString(),
      content,
      timestamp: new Date(),
      sender: {
        id: "current-user",
        name: "You",
        image: "/avatars/you.jpg",
      },
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex h-full w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Left sidebar */}
      <div className="w-80 border-r flex flex-col">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Chats</h1>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Video className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Search className="h-5 w-5" />
              </Button>
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

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {/* Chat header */}
        <div className="flex items-center justify-between p-3 border-b">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/avatars/ricky.jpg" alt="Ricky Smith" />
              <AvatarFallback>RS</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-medium">Ricky Smith</h2>
              <p className="text-xs text-gray-500">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Video className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Info className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <div className="flex flex-col gap-4">
            <div className="text-center text-xs text-gray-500 my-2">
              YESTERDAY
            </div>

            {messages.map((message) => (
              <Message
                key={message.id}
                message={message}
                isOwn={message.sender.id === "current-user"}
              />
            ))}
          </div>
        </div>

        {/* Chat input */}
        <div className="border-t p-3">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-gray-500"
            >
              <Paperclip className="h-5 w-5" />
            </Button>
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Write something..."
                className="w-full px-4 py-2 bg-gray-100 rounded-full text-sm"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-500"
                >
                  <Smile className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-500"
                >
                  <Mic className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-green-500"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Right sidebar */}
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
    </div>
  );
}
