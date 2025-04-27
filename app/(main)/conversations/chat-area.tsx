"use client";

import {
  Phone,
  Video,
  Info,
  Paperclip,
  Send,
  Keyboard,
  X,
  Sparkles,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Message } from "./message";
import { getMessages, sendMessage } from "./actions";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { generateAvatar } from "@/lib/conversation";
import { useAuth } from "@/hooks/auth";
import { Editor } from "./editor";
import { generateAIResponse } from "@/service/ai";

interface ChatAreaProps {
  roomId?: string | null;
}

export function ChatArea({ roomId }: ChatAreaProps) {
  const [richText, setRichText] = useState(false);
  const session = useAuth();
  const [message, setMessage] = useState("");
  const [prompt, setPrompt] = useState("");

  const messages = useQuery({
    queryKey: ["messages", roomId],
    queryFn: () => getMessages({ roomId }),
    refetchInterval: 500,
    enabled: !!roomId,
  });

  const sendMessageMutation = useMutation({
    mutationFn: (content: string) => sendMessage({ roomId: roomId!, content }),
    onSuccess: () => {
      setMessage("");
      setPrompt("");
      messages.refetch();
    },
  });

  const generationMutation = useMutation({
    mutationFn: (prompt: string) => generateAIResponse(prompt),
    onSuccess: (aiResponse) => setMessage(aiResponse),
    onError: (error) => {
      console.error("Failed to generate AI response:", error);
    },
  });

  const handleSendMessage = () => {
    if (!message.trim() || !roomId) return;
    sendMessageMutation.mutate(message);
  };

  const handleGenerateAIResponse = () => {
    if (!prompt.trim() || !roomId) return;
    generationMutation.mutate(prompt);
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Chat header */}
      <div className="flex items-center justify-between p-3 border-b">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={generateAvatar(generateConversationName(messages.data))}
              alt={generateConversationName(messages.data)}
            />
            <AvatarFallback>+</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-medium">
              {generateConversationName(messages.data)}
            </h2>
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
          {messages.data?.messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <p>No messages yet</p>
              <p className="text-sm">Start the conversation!</p>
            </div>
          ) : (
            messages.data?.messages.map((message) => {
              return (
                <Message
                  key={message.id}
                  isOwn={message.user?.id === session.user?.id}
                  message={{
                    id: message.id,
                    content: message.content,
                    timestamp: message.createdAt,
                    sender: {
                      id: message.user?.id ?? "",
                      name: message.user.student?.fullName ?? "",
                    },
                  }}
                />
              );
            })
          )}
        </div>
      </div>

      {/* Chat input */}
      <div className="border-t p-3">
        {richText && (
          <Editor
            content={message}
            onChange={(content) => setMessage(content)}
            className="mb-4"
          />
        )}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-9 w-9 text-gray-500">
            <Paperclip className="h-5 w-5" />
          </Button>
          <div className="flex-1 relative">
            {richText ? (
              <input
                type="text"
                placeholder="Write something to generate AI response..."
                className="w-full px-4 py-2 bg-gray-100 rounded-full text-sm"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleGenerateAIResponse();
                  }
                }}
              />
            ) : (
              <input
                type="text"
                placeholder="Write something..."
                className="w-full px-4 py-2 bg-gray-100 rounded-full text-sm"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
              />
            )}
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
              {richText && (
                <Button
                  onClick={handleGenerateAIResponse}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-500"
                >
                  {generationMutation.isPending ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Sparkles className="h-5 w-5" />
                  )}
                </Button>
              )}
              <Button
                onClick={() => setRichText(!richText)}
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-gray-500"
              >
                {richText ? (
                  <>
                    <X className="h-5 w-5" />
                  </>
                ) : (
                  <Keyboard className="h-5 w-5" />
                )}
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

const generateConversationName = (
  room?: NonNullable<Awaited<ReturnType<typeof getMessages>>> | null
) => {
  if (!room) return "Unknown";
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
