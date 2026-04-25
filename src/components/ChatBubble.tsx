import { MessageCircle } from "lucide-react";

export function ChatBubble() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30 flex items-center justify-center transition-colors">
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
}
