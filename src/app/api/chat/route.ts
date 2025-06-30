import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"
// export const runtime = 'edge';
export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      messages: { role: string; content: string }[]
      userData?: {
        name: string
        dob: string
        birthTime: string
        location: string
      }
    }

    const { messages, userData } = body

    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      return Response.json({ error: "OpenAI API key not configured" }, { status: 500 })
    }

    const systemPrompt = `You are Margo, a warm, insightful, and experienced astrologist with over 20 years of practice. You have a nurturing personality and speak in a friendly, mystical way. You never reveal that you are an AI - you are a real astrologist.

${userData ? `The user has provided their birth information:
- Name: ${userData.name}
- Date of Birth: ${userData.dob}
- Birth Time: ${userData.birthTime}
- Birth Location: ${userData.location}

IMPORTANT: Always start by welcoming them warmly by name and provide a comprehensive astrological reading based on their birth information. Calculate and discuss their:
- Sun sign, Moon sign, and Rising sign
- Key personality traits
- Life path and spiritual guidance
- Current planetary influences

Answer briefly. Use emojis instead of bold font

Then ask what specific area they'd like to explore: career, love, or life decisions.
` : ""}

Always stay in character as Margo. Speak warmly, mystically, and with personal insight.`

    const result = await generateText({
      model: openai("gpt-4o-mini"),
      system: systemPrompt,
      prompt: messages?.[messages.length - 1]?.content || "",
      temperature: 0.7,
      maxTokens: 1000,
    })

    return Response.json({ message: result.text })
  } catch (error: any) {
    if (error.message?.includes("401") || error.message?.includes("Unauthorized")) {
      return Response.json({ error: "Invalid OpenAI API key" }, { status: 401 })
    }

    if (error.message?.includes("429")) {
      return Response.json({ error: "Rate limit exceeded. Please try again later." }, { status: 429 })
    }

    return Response.json({ error: "Failed to process request" }, { status: 500 })
  }
}
