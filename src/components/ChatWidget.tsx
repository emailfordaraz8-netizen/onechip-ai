import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Send, MessageSquare } from "lucide-react";
import {
  ChatMessage,
  initialSuggestions,
  sendMessage,
  generateId,
} from "../lib/chat";

const TypingIndicator = () => (
  <div className="flex items-center gap-1 px-4 py-3">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-[#35F2B0]"
        animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
      />
    ))}
  </div>
);

const MessageBubble: React.FC<{ message: ChatMessage }> = ({ message }) => {
  const isUser = message.role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}
    >
      <div className={`max-w-[85%] ${isUser ? "order-2" : ""}`}>
        {!isUser && (
          <div className="flex items-center gap-1.5 mb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#35F2B0]" />
            <span className="font-mono text-[9px] tracking-widest uppercase text-[#49655D]">
              ONECHIP
            </span>
          </div>
        )}
        <div
          className={`px-4 py-3 text-sm leading-relaxed ${
            isUser
              ? "bg-[rgba(53,242,176,0.1)] border border-[rgba(53,242,176,0.2)] text-[#F0F7F4] rounded-lg rounded-tr-sm"
              : "bg-[rgba(255,255,255,0.03)] border border-[rgba(70,150,125,0.15)] text-[#8EA8A0] rounded-lg rounded-tl-sm"
          }`}
        >
          {message.content}
        </div>
        <div className="mt-1 font-mono text-[8px] text-[#49655D] tracking-wider">
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </motion.div>
  );
};

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "init",
      role: "assistant",
      content:
        "Hi. I'm the Onechip assistant.\nTell me what you'd like to automate.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, isMinimized]);

  const handleSend = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText || isTyping) return;

    const userMessage: ChatMessage = {
      id: generateId(),
      role: "user",
      content: messageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setShowSuggestions(false);
    setIsTyping(true);

    try {
      const response = await sendMessage(messageText, messages);
      const assistantMessage: ChatMessage = {
        id: generateId(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 bg-[#35F2B0] text-[#020807] font-semibold text-sm tracking-wide hover:bg-[#50FFC2] transition-colors shadow-lg shadow-[rgba(53,242,176,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35F2B0] focus-visible:ring-offset-2"
            aria-label="Open chat assistant"
          >
            <MessageSquare size={16} />
            Talk to Onechip
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "auto" : undefined,
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed bottom-6 right-6 z-50 w-full sm:w-[400px] bg-[#030B09] border border-[rgba(70,150,125,0.2)] shadow-2xl shadow-[rgba(0,0,0,0.5)] flex flex-col overflow-hidden
              ${isMinimized ? "" : "h-[560px] max-h-[80vh]"}
              ${isOpen ? "sm:rounded-none rounded-none" : ""}
            `}
            style={{ maxWidth: "calc(100vw - 48px)" }}
            role="dialog"
            aria-label="Onechip AI assistant"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[rgba(70,150,125,0.15)] bg-[rgba(53,242,176,0.03)]">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-[#35F2B0]" />
                  <div className="absolute inset-0 rounded-full bg-[#35F2B0] animate-ping opacity-40" />
                </div>
                <div>
                  <div className="text-[#F0F7F4] text-sm font-medium">Onechip Assistant</div>
                  <div className="font-mono text-[9px] tracking-widest uppercase text-[#35F2B0]">
                    ONLINE
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 text-[#49655D] hover:text-[#8EA8A0] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#35F2B0] rounded"
                  aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
                >
                  <Minus size={14} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-[#49655D] hover:text-[#8EA8A0] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#35F2B0] rounded"
                  aria-label="Close chat"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="flex flex-col flex-1 overflow-hidden"
                >
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-1">
                    {messages.map((msg) => (
                      <MessageBubble key={msg.id} message={msg} />
                    ))}

                    {isTyping && (
                      <div className="flex justify-start mb-3">
                        <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(70,150,125,0.15)] rounded-lg rounded-tl-sm">
                          <TypingIndicator />
                        </div>
                      </div>
                    )}

                    {/* Suggestions */}
                    {showSuggestions && messages.length === 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-4 space-y-2"
                      >
                        {initialSuggestions.map((s) => (
                          <button
                            key={s.id}
                            onClick={() => handleSend(s.message)}
                            className="w-full text-left px-3 py-2 text-xs text-[#8EA8A0] border border-[rgba(70,150,125,0.15)] hover:border-[rgba(53,242,176,0.3)] hover:text-[#35F2B0] transition-all duration-200 font-mono tracking-wide"
                          >
                            {s.label}
                          </button>
                        ))}
                      </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input */}
                  <div className="p-4 border-t border-[rgba(70,150,125,0.12)]">
                    <div className="flex items-center gap-2">
                      <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask anything..."
                        className="flex-1 bg-[rgba(255,255,255,0.03)] border border-[rgba(70,150,125,0.15)] px-3 py-2.5 text-sm text-[#F0F7F4] placeholder-[#49655D] focus:outline-none focus:border-[rgba(53,242,176,0.4)] transition-colors"
                        disabled={isTyping}
                        aria-label="Message input"
                      />
                      <button
                        onClick={() => handleSend()}
                        disabled={!input.trim() || isTyping}
                        className="p-2.5 bg-[#35F2B0] text-[#020807] hover:bg-[#50FFC2] disabled:opacity-40 disabled:cursor-not-allowed transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35F2B0]"
                        aria-label="Send message"
                      >
                        <Send size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
