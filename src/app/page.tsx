"use client";
import type React from "react"
import { useState } from "react"
import { Section, Block, Link } from "@/devlink/_Builtin";
import {Navigation} from "@/devlink/Navigation"
import { Footer } from "@/devlink/Footer"; // Import the Footer component
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ChatInterface from "@/components/chat-interface"

interface UserData {
  name: string
  dob: string
  birthTime: string
  location: string
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    birthTime: "",
    location: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.dob && formData.birthTime && formData.location) {
      setUserData(formData)
    }
  }

  const handleInputChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
  }

  if (userData) {
    return <ChatInterface userData={userData} />
  }

  return (
    <Section
      tag="section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Block tag="div" className="container">
      <Navigation/>
        <Block
          tag="div"
          className="hero-split"
          style={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-white mb-2">✨ AstroNum ✨</CardTitle>
              <CardDescription className="text-purple-200">
                Discover your cosmic blueprint with Margo, your personal astrologist
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange("name")}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dob" className="text-white">
                    Date of Birth
                  </Label>
                  <Input
                    id="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleInputChange("dob")}
                    className="bg-white/20 border-white/30 text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="birthTime" className="text-white">
                    Birth Time
                  </Label>
                  <Input
                    id="birthTime"
                    type="time"
                    value={formData.birthTime}
                    onChange={handleInputChange("birthTime")}
                    className="bg-white/20 border-white/30 text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-white">
                    Birth Location
                  </Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="City, State/Country"
                    value={formData.location}
                    onChange={handleInputChange("location")}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
                >
                  Connect with Margo ✨
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        </Block>
        {/* <Footer/> */}
      </Block>
    </Section>
  );
}
