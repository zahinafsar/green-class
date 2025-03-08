"use client";

import { useState } from "react";
import { Phone, Video, Info, Paperclip, Smile, Mic, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Message } from "@/components/chat/message";

interface MessageType {
  id: string;
  content: string;
  timestamp: Date;
  sender: {
    id: string;
    name: string;
    image: string;
  };
}

interface ChatAreaProps {
  messages: MessageType[];
  onSendMessage: (content: string) => void;
}

export function ChatArea({ messages, onSendMessage }: ChatAreaProps) {
  const [messageInput, setMessageInput] = useState("");

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      onSendMessage(messageInput);
      setMessageInput("");
    }
  };

  return (
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
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
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
            onClick={handleSendMessage}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
} 