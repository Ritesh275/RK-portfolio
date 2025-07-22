"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

// Define message type
type Message = {
  id: string
  role: "user" | "assistant"
  content: string
}

// Pre-defined responses
const responses = {
  greeting: "Hello! I'm Ritesh's AI assistant. How can I help you today?",
  projects:
    "Ritesh has worked on several impressive projects including:\n\n• AI-Powered Memory Chatbot: A conversational AI with session-based memory\n• Code Explainer Pro: AI tool that generates explanations of code with flowcharts\n• Admin Dashboard: Data visualization and user management platform\n• Restaurant Website: Modern site with online ordering system\n• E-commerce Application: Full-featured platform with payment integration",
  skills:
    "Ritesh's key skills include:\n\n• Programming: Python, Java, C++, JavaScript\n• AI & ML: OpenAI GPT, LangChain, Machine Learning, NLP\n• Web Development: React, Flask, HTML/CSS, Git, REST APIs\n• Special Skills: Sign Language Interpretation (ASL)",
  experience:
    "Ritesh's work experience includes:\n\n• AI Coding Expert at Outlier AI (Aug 2024 - Present)\n• Frontend Developer Intern at Suven Consultants (Apr 2023 - May 2023)",
  education: "Ritesh has a Bachelor of Computer Engineering from Savitribai Phule Pune University (2021-2024).",
  contact:
    "You can contact Ritesh through:\n\n• Email: riteshkakade275@gmail.com\n• Phone: +91 9175357169\n• LinkedIn: linkedin.com/in/ritesh-kakade-6b8514366\n• GitHub: github.com/ritesh275",
  default:
    "I'm not sure about that specific detail. For more information, I recommend reaching out to Ritesh directly at riteshkakade275@gmail.com.",
}

// Function to generate response based on user input
function generateResponse(input: string): string {
  const lowercaseInput = input.toLowerCase()

  if (lowercaseInput.includes("hello") || lowercaseInput.includes("hi") || lowercaseInput.includes("hey")) {
    return responses.greeting
  } else if (
    lowercaseInput.includes("project") ||
    lowercaseInput.includes("work") ||
    lowercaseInput.includes("portfolio") ||
    lowercaseInput.includes("chatbot") ||
    lowercaseInput.includes("code explainer")
  ) {
    return responses.projects
  } else if (
    lowercaseInput.includes("skill") ||
    lowercaseInput.includes("technology") ||
    lowercaseInput.includes("tech") ||
    lowercaseInput.includes("programming") ||
    lowercaseInput.includes("language")
  ) {
    return responses.skills
  } else if (
    lowercaseInput.includes("experience") ||
    lowercaseInput.includes("job") ||
    lowercaseInput.includes("work") ||
    lowercaseInput.includes("career") ||
    lowercaseInput.includes("outlier") ||
    lowercaseInput.includes("suven")
  ) {
    return responses.experience
  } else if (
    lowercaseInput.includes("education") ||
    lowercaseInput.includes("university") ||
    lowercaseInput.includes("college") ||
    lowercaseInput.includes("degree") ||
    lowercaseInput.includes("study")
  ) {
    return responses.education
  } else if (
    lowercaseInput.includes("contact") ||
    lowercaseInput.includes("email") ||
    lowercaseInput.includes("phone") ||
    lowercaseInput.includes("linkedin") ||
    lowercaseInput.includes("github") ||
    lowercaseInput.includes("reach")
  ) {
    return responses.contact
  } else {
    return responses.default
  }
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI thinking delay
    setTimeout(() => {
      // Generate response
      const responseContent = generateResponse(userMessage.content)

      // Add assistant message
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: responseContent,
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1000)
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
                      <p className="text-slate-400">"Tell me about his skills"</p>
                      <p className="text-slate-400">"How can I contact Ritesh?"</p>
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
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.4s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="border-t border-slate-200 p-4">
                <form onSubmit={handleSubmit} className="flex space-x-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
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
                    <Send className="h-4 w-4" />
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
