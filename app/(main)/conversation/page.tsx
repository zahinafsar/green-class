"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ConversationSidebar } from "@/components/conversation/ConversationSidebar";
import { ChatArea } from "@/components/conversation/ChatArea";
import { ProfileSidebar } from "@/components/conversation/ProfileSidebar";
import { Message, Contact, MediaItem } from "@/types/conversation";

// Sample data - replace with your actual data source
const initialMessages: Message[] = [
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

const contacts: Contact[] = [
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

const mediaItems: MediaItem[] = [
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
  const [messages, setMessages] = useState<Message[]>(initialMessages);

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
      <ConversationSidebar contacts={contacts} />

      {/* Main chat area */}
      <ChatArea messages={messages} onSendMessage={handleSendMessage} />

      {/* Right sidebar */}
      <ProfileSidebar mediaItems={mediaItems} />
    </div>
  );
}
