import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Smile, Paperclip, Send, Mic } from "lucide-react"
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
    <div className="border-t p-3">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="h-9 w-9 text-gray-500">
          <Paperclip className="h-5 w-5" />
        </Button>
        <div className="flex-1 relative">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Write something..."
            className="w-full px-4 py-2 bg-gray-100 rounded-full text-sm"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500">
              <Smile className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500">
              <Mic className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <Button 
          onClick={handleSend} 
          variant="ghost" 
          size="icon" 
          className="h-9 w-9 text-primary"
          disabled={!message.trim()}
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
} 