"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface UserData {
  name: string
  dob: string
  birthTime: string
  location: string
}

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

interface ChatInterfaceProps {
  userData: UserData
}

export default function ChatInterface({ userData }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const hasSentWelcome = useRef(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: content.trim(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/app/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
          userData,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json() as { error?: string }
        throw new Error(errorData.error || `HTTP ${response.status}`)
      }

      const data = await response.json() as { message: string }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.message,
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message")
      // Remove the user message if there was an error
      setMessages((prev) => prev.slice(0, -1))
    } finally {
      setIsLoading(false)
    }
  }

  // Initialize with welcome message
  useEffect(() => {
    if (!hasSentWelcome.current) {
      hasSentWelcome.current = true
      const welcomeMessage = `Hello Margo! I'm ${userData.name}. I was born on ${userData.dob} at ${userData.birthTime} in ${userData.location}.`
      sendMessage(welcomeMessage)
    }
  }, [userData])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      sendMessage(input)
      setInput("")
    }
  }

  function renderSimpleMarkdown(text: string) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g) // match **bold**
    return parts.map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={i}>{part.slice(2, -2)}</strong>
      ) : (
        part
      )
    )
  }
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="h-[90vh] bg-white/10 backdrop-blur-md border-white/20 flex flex-col">
          <CardHeader className="border-b border-white/20 flex-shrink-0">
            <CardTitle className="flex items-center gap-3 text-white">
              <Avatar className="h-10 w-10 bg-gradient-to-r from-purple-400 to-pink-400">
                <AvatarFallback className="text-white font-bold">M</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold">Margo</h2>
                <p className="text-sm text-purple-200">Your Personal Astrologist</p>
              </div>
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0 min-h-0">
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {/* Error Display */}
              {error && (
                <div className="bg-red-500/20 border border-red-500/30 text-red-200 p-4 rounded-lg">
                  <p className="font-semibold">⚠️ Connection Error</p>
                  <p className="text-sm mt-1">Unable to connect to Margo. Please try again.</p>
                  <Button
                    onClick={() => window.location.reload()}
                    className="mt-2 bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1"
                  >
                    Retry
                  </Button>
                </div>
              )}

              {/* Messages */}
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] p-4 rounded-lg break-words ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                        : "bg-white/20 text-white border border-white/30"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <div className="flex items-center gap-2 mb-2">
                        <Avatar className="h-6 w-6 bg-gradient-to-r from-purple-400 to-pink-400">
                          <AvatarFallback className="text-white text-xs font-bold">M</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium text-purple-200">Margo</span>
                      </div>
                    )}
                    <div className="whitespace-pre-wrap leading-relaxed text-sm md:text-base">{renderSimpleMarkdown(message.content)}</div>
                  </div>
                </div>
              ))}

              {/* Loading State */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/20 text-white border border-white/30 p-6 rounded-lg text-center min-w-[200px]">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Avatar className="h-8 w-8 bg-gradient-to-r from-purple-400 to-pink-400">
                        <AvatarFallback className="text-white text-sm font-bold">M</AvatarFallback>
                      </Avatar>
                      <span className="text-lg font-medium text-purple-200">Margo</span>
                    </div>
                    <div className="flex justify-center space-x-1 mb-2">
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                    <p className="text-sm text-purple-200">Consulting the stars...</p>
                  </div>
                </div>
              )}

              {/* Scroll anchor */}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area - Fixed at bottom */}
            <div className="border-t border-white/20 p-4 flex-shrink-0">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Margo about your career, love life, or any decisions..."
                  className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6"
                >
                  {isLoading ? "..." : "Send"}
                </Button>
              </form>

              {/* Quick Actions */}
              <div className="mt-2 flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => sendMessage("Tell me about my career path and professional strengths")}
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-xs"
                  disabled={isLoading}
                >
                  💼 Tell me about my career path and professional strengths
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => sendMessage("What do the stars say about my love life and relationships?")}
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-xs"
                  disabled={isLoading}
                >
                  💕 What do the stars say about my love life and relationships?
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => sendMessage("I have an important decision to make. Can you provide guidance?")}
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-xs"
                  disabled={isLoading}
                >
                  🔮 Provide Guidance
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
