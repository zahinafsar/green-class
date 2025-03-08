import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface MessageProps {
  message: {
    id: string
    content: string
    timestamp: Date
    sender: {
      id: string
      name: string
      image?: string
    }
  }
  isOwn?: boolean
}

export function Message({ message, isOwn = false }: MessageProps) {
  return (
    <div className={cn("flex w-full", isOwn ? "justify-end" : "justify-start")}>
      <div className={cn("flex max-w-[80%] gap-2", isOwn && "flex-row-reverse")}>
        {!isOwn && (
          <Avatar className="h-8 w-8 mt-1 flex-shrink-0">
            <AvatarImage src={message.sender.image} alt={message.sender.name} />
            <AvatarFallback>
              {message.sender.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        )}
        <div className="flex flex-col gap-1">
          {!isOwn && (
            <span className="text-xs text-gray-500 ml-1">
              {message.sender.name} {new Date(message.timestamp).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          )}
          <div
            className={cn(
              "rounded-2xl px-4 py-2 text-sm",
              isOwn
                ? "bg-primary text-white rounded-tr-none"
                : "bg-gray-200 text-gray-800 rounded-tl-none"
            )}
          >
            {message.content}
          </div>
          {isOwn && (
            <span className="text-xs text-gray-500 text-right mr-1">
              {new Date(message.timestamp).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          )}
        </div>
      </div>
    </div>
  )
} 