"use client"

import type React from "react"

import { useState } from "react"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react"

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
  })

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input.trim()) {
      handleSubmit(e)
    }
  }

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="rounded-full w-14 h-14 bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-pulse"
          >
            <MessageCircle className="h-6 w-6" />
            <span className="sr-only">Open chat</span>
          </Button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96">
          <Card className="bg-white/95 backdrop-blur-lg border-slate-200 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div>
                    <CardTitle className="text-sm font-medium">Ritesh's AI Assistant</CardTitle>
                    <p className="text-xs text-white/80">Ask me about Ritesh's work!</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 && (
                  <div className="text-center text-slate-500 text-sm">
                    <Bot className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
                    <p>Hi! I'm Ritesh's AI assistant.</p>
                    <p>Ask me about his projects, skills, or experience!</p>
                    <div className="mt-3 space-y-1 text-xs">
                      <p className="text-slate-400">Try asking:</p>
                      <p className="text-slate-400">"What projects has Ritesh worked on?"</p>
                      <p className="text-slate-400">"Tell me about his AI experience"</p>
                    </div>
                  </div>
                )}

                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-indigo-600 to-emerald-600 text-white"
                          : "bg-slate-100 text-slate-900"
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.role === "assistant" && (
                          <Bot className="h-4 w-4 mt-0.5 text-indigo-600 flex-shrink-0" />
                        )}
                        {message.role === "user" && <User className="h-4 w-4 mt-0.5 text-white flex-shrink-0" />}
                        <div className="flex-1 whitespace-pre-wrap">{message.content}</div>
                      </div>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-slate-100 rounded-lg px-3 py-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Bot className="h-4 w-4 text-indigo-600" />
                        <Loader2 className="h-4 w-4 animate-spin text-slate-400" />
                        <span className="text-slate-500">Thinking...</span>
                      </div>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="flex justify-start">
                    <div className="bg-red-100 border border-red-200 rounded-lg px-3 py-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Bot className="h-4 w-4 text-red-600" />
                        <span className="text-red-700">Sorry, I'm having trouble connecting. Please try again!</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="border-t border-slate-200 p-4">
                <form onSubmit={handleFormSubmit} className="flex space-x-2">
                  <input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask about Ritesh's work..."
                    className="flex-1 px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    disabled={isLoading}
                  />
                  <Button
                    type="submit"
                    size="sm"
                    disabled={isLoading || !input.trim()}
                    className="bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-700 hover:to-emerald-700 text-white"
                  >
                    {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
