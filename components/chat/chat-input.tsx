import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Smile, PaperclipIcon, Send } from "lucide-react"
import { useState } from "react"

interface ChatInputProps {
  onSend: (message: string) => void
}

export function ChatInput({ onSend }: ChatInputProps) {
  const [message, setMessage] = useState("")

  const handleSend = () => {
    if (message.trim()) {
      onSend(message)
      setMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="border-t p-4">
      <div className="flex items-end gap-2">
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Smile className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <PaperclipIcon className="h-5 w-5" />
        </Button>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type a message..."
          className="min-h-[40px] max-h-[200px] resize-none"
          rows={1}
        />
        <Button onClick={handleSend} size="icon" className="h-9 w-9">
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
} 