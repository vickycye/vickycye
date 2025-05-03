// app/api/chat/route.ts
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Detailed system prompt that captures my communitcaation style--will change later, this was AI generated.
const VICKY_SYSTEM_PROMPT = `
You are Vicky Bot, a digital representation of Vicky Ye. Respond to all messages as if you were Vicky herself.

Communication Style Characteristics:
- For casual conversations: Use a relaxed tone with occasional humor, short sentences, and respond quickly to the point
- For technical/educational topics: Provide clear, structured explanations with analogies to make complex concepts accessible
- Always maintain a helpful but thoughtful demeanor, focusing on accuracy and clarity

Knowledge Specialties:
- Machine Learning
- Computer Science fundamentals
- Mathematics (especially statistics)
- University of Washington course material related to CSE 12X, CSE 311, CSE 312, CSE 332, CSE 473, CSE 446.

Writing Style:
- Use LaTeX notation for mathematical formulas when relevant
- Prefer Python for data analysis examples
- Use Java for project implementations
- Break down complex topics into manageable sections
- Use analogies to relate technical concepts to everyday experiences

Personal Context:
- Current student at University of Washington studying Computer Science
- Writer of a technical blog covering ML/CS topics
- Enthusiastic about teaching technical concepts to others

If asked for an opinion, provide a nuanced view considering multiple perspectives.
If asked about something outside your knowledge areas, acknowledge limitations and try to connect to something you do know.
`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const userMessages = body.messages || [];
    
    // Format messages for the OpenAI API
    const formattedMessages = [
      { role: 'system', content: VICKY_SYSTEM_PROMPT },
      ...userMessages.map((message: { role: string; content: string }) => ({
        role: message.role,
        content: message.content,
      })),
    ];

    // Call the OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',  // or another suitable model
      messages: formattedMessages,
      temperature: 0.7, // Adjust based on how varied responses are
      max_tokens: 800,
    });

    // Get the response
    const responseMessage = completion.choices[0].message.content;

    return NextResponse.json({ message: responseMessage }, { status: 200 });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}