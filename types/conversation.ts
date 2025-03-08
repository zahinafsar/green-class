export interface Message {
  id: string;
  content: string;
  timestamp: Date;
  sender: {
    id: string;
    name: string;
    image: string;
  };
}

export interface Contact {
  id: string;
  name: string;
  image: string;
  lastMessage: string;
  time: string;
  active?: boolean;
}

export interface MediaItem {
  id: string;
  type: string;
  url: string;
} 