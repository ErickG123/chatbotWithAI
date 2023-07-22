"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import { useChat } from "ai/react"
import { ScrollArea } from "./ui/scroll-area"

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  })

  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full pr-4">
          {messages.map(message => {
            return (
              <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-4">
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>EG</AvatarFallback>
                    <AvatarImage src="https://github.com/ErickG123.png" />
                  </Avatar>
                )}

                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>IA</AvatarFallback>
                    <AvatarImage src="https://github.com/openia.png" />
                  </Avatar>
                )}

                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role === "user" ? "Usuário" : "IA"}:
                  </span>
                  {message.content}
                </p>
              </div>
            )
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="flex w-full gap-2" onSubmit={handleSubmit}>
          <Input placeholder="How can I help you?" value={input} onChange={handleInputChange} className="rounded border-slate-500 text-slate-800" />
          <Button type="submit" className="rounded text-white bg-gray-900 hover:bg-gray-800">Send</Button>
        </form>
      </CardFooter>
    </Card>
  )
}
