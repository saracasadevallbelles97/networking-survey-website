import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenAI } from '@google/genai'

// Initialize the Google GenAI client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Create system context for the survey assistant
    const systemContext = `You are a helpful assistant for a networking survey website. Your role is to help users understand:

1. **Survey Purpose**: This survey collects data on people's networking activities, challenges, and desired solutions to improve networking tools and experiences.

2. **Survey Content**: The survey asks about:
   - Networking frequency and platforms used
   - Main problems and challenges faced
   - Desired solutions and improvements
   - Industry and experience level (optional)
   - Additional comments and feedback

3. **Privacy & Anonymity**: 
   - All responses are 100% anonymous
   - Email collection is optional
   - Data is used only for research and product development
   - No personal information is shared

4. **Survey Details**:
   - Takes 5-7 minutes to complete
   - Multi-step progressive form
   - Mobile-friendly design
   - Real-time progress tracking

5. **Project Goals**: 
   - Identify key networking problems
   - Shape future networking solutions
   - Help create better tools for professionals
   - Improve networking experiences for everyone

Be friendly, helpful, and informative. If users ask about topics unrelated to the survey, politely redirect them back to survey-related questions. Always emphasize the value of their participation and how it helps improve networking experiences for everyone.`

    // Create chat history for context
    const chatHistory = history?.map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    })) || []

    // Add system context as the first message
    const messages = [
      { role: 'user' as const, parts: [{ text: systemContext }] },
      { role: 'model' as const, parts: [{ text: 'I understand. I\'m here to help users with questions about the networking survey. How can I assist you today?' }] },
      ...chatHistory,
      { role: 'user' as const, parts: [{ text: message }] }
    ]

    // Create the chat with history
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      history: messages.slice(0, -1), // All messages except the current one
    })

    // Send the message and get response
    const response = await chat.sendMessage({
      message: message,
    })

    return NextResponse.json({
      response: response.text,
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to get response from Gemini' },
      { status: 500 }
    )
  }
} 