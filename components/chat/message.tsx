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
    <div className={cn("flex gap-3 p-4", isOwn && "flex-row-reverse")}>
      <Avatar className="h-8 w-8">
        <AvatarImage src={message.sender.image} alt={message.sender.name} />
        <AvatarFallback>
          {message.sender.name.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className={cn("flex flex-col gap-1", isOwn && "items-end")}>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{message.sender.name}</span>
          <span className="text-xs text-muted-foreground">
            {new Date(message.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
        <div
          className={cn(
            "rounded-lg px-3 py-2 text-sm",
            isOwn
              ? "bg-primary text-primary-foreground"
              : "bg-muted"
          )}
        >
          {message.content}
        </div>
      </div>
    </div>
  )
} 