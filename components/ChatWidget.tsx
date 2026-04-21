
import React, { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{id: number, text: string, sender: 'user' | 'bot'}[]>([
    { id: 1, text: "Hello! I'm Smartify AI 🤖. How can I help you find the perfect gadget today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMsg = { id: Date.now(), text: inputValue, sender: 'user' as const };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "That's a great choice! Our AI recommends checking the specs below.",
        "I can definitely help with that. Have you seen our Deal of the Day?",
        "Interesting! Based on your preference, you might like our new Arrivals.",
        "Let me analyze that for you... 🤖 Processing...",
      ];
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { id: Date.now() + 1, text: randomResponse, sender: 'bot' }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Toggle Button - Bottom Right */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-8 right-8 z-40 group flex items-center justify-center gap-3 bg-white/90 backdrop-blur-md border border-white/50 shadow-2xl shadow-blue-600/30 p-4 pr-6 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-blue-500/50 hover:bg-white ${isOpen ? 'scale-90 opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <span className="text-4xl animate-bounce" style={{ animationDuration: '2s' }}>🤖</span>
        <span className="font-bold text-lg text-slate-800 font-tech hidden group-hover:block transition-all">AI Chat</span>
        
        {/* Ping Animation */}
        <span className="absolute top-1 right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
        </span>
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed z-50 transition-all duration-300 transform ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95 pointer-events-none'}`}
        style={{ 
          bottom: '100px', 
          right: '32px', 
          width: '360px', 
          height: '520px' 
        }}
      >
        <div className="w-full h-full glass-panel flex flex-col overflow-hidden shadow-2xl border-blue-200/50 rounded-[2rem]">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-5 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <span className="text-3xl bg-white/20 p-1.5 rounded-full backdrop-blur-sm">🤖</span>
              <div>
                <h3 className="font-bold text-base font-tech tracking-wide">Smartify AI</h3>
                <p className="text-[11px] text-blue-100 flex items-center gap-1.5 font-medium"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Online Now</p>
              </div>
            </div>
            <button onClick={toggleChat} className="bg-white/10 hover:bg-white/20 p-1.5 rounded-full text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/80 custom-scrollbar">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3.5 px-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.sender === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-100 flex gap-3">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-slate-100 border-transparent focus:bg-white focus:border-blue-300 rounded-xl px-4 py-3 text-sm transition-all outline-none border focus:shadow-inner"
            />
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition-all flex items-center justify-center shadow-lg shadow-blue-200 hover:scale-105 active:scale-95"
              disabled={!inputValue.trim()}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
