"use client"

import { Message } from "@/components/chat/message"
import { ChatInput } from "@/components/chat/chat-input"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

// Sample data - replace with your actual data source
const initialMessages = [
  {
    id: "1",
    content: "Hey, how are you?",
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    sender: {
      id: "user1",
      name: "John Doe",
      image: "/avatars/john.jpg",
    },
  },
  {
    id: "2",
    content: "I'm good, thanks! How about you?",
    timestamp: new Date(Date.now() - 1000 * 60 * 4),
    sender: {
      id: "current-user",
      name: "You",
      image: "/avatars/you.jpg",
    },
  },
]

export default function ConversationPage() {
  const router = useRouter()
  const [messages, setMessages] = useState(initialMessages)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  if (status === "loading") {
    return <div className="flex h-screen items-center justify-center">Loading...</div>
  }


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
    }
    setMessages([...messages, newMessage])
  }

  return (
    <div className="flex h-screen flex-col">
      <header className="border-b p-4">
        <h1 className="text-lg font-semibold">Conversation</h1>
      </header>
      
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col">
          {messages.map((message) => (
            <Message
              key={message.id}
              message={message}
              isOwn={message.sender.id === "current-user"}
            />
          ))}
        </div>
      </div>

      <ChatInput onSend={handleSendMessage} />
    </div>
  )
} 