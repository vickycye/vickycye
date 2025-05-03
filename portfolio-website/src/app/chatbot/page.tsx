// app/chatbot/page.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Define message interface
interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// Define offline responses for common questions
const OFFLINE_RESPONSES: Record<string, string> = {
    "contact": "you can contact me at vickyye@uw.edu or connect with me on linkedin at linkedin.com/in/vickycye",
    "email": "my email is vickyye@uw.edu. feel free to reach out!",
    "phone": "i prefer email communication. you can reach me at vickyye@uw.edu",
    "linkedin": "connect with me on linkedin at linkedin.com/in/vickycye",
    "github": "check out my projects on github: github.com/vickycye",
    "location": "i'm based in Seattle, WA at the University of Washington",
    "resume": "you can download my resume from the footer of my website, or email me for the latest version",
    "help": "you can ask me about my contact info, projects, or blog topics! i'll do my best to respond like the real vicky would.",
    "": "hey there! i'm Vicky bot. you can ask me about contact info, my projects, or my blog topics!"
  };

export default function ChatbotPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "sup! assuming i still have credits left, lets talk about something!"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [surpriseShown, setSurpriseShown] = useState(false);
  
  // Add a ref for the chat container
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  // Track the previous messages length
  const prevMessagesLengthRef = useRef(1); // Start with 1 for initial message

  // Modified useEffect to scroll only within the chat container
  useEffect(() => {
    // Only scroll if new messages were added (not on page refresh)
    if (messages.length > prevMessagesLengthRef.current) {
      // Set the scroll position to the bottom of the container
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
      // Update the ref to the current length
      prevMessagesLengthRef.current = messages.length;
    }
  }, [messages]);

  // Function to check for offline responses
  const getOfflineResponse = (input: string): string | null => {
    // Convert input to lowercase for case-insensitive matching
    const lowercaseInput = input.toLowerCase();
    
    // Check for keywords in the input
    for (const [keyword, response] of Object.entries(OFFLINE_RESPONSES)) {
      if (keyword && lowercaseInput.includes(keyword)) {
        return response;
      }
    }
    
    // If no matches, return null to proceed with API call
    return null;
  };

  // Function to handle the surprise message
  const showSurpriseMessage = () => {
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "bet you didn't expect this to be in the contact page, did you? 😉" 
      }]);
      setSurpriseShown(true);
    }, 2000); // Wait 2 seconds before showing the surprise message
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message to chat
    const userMessage = { role: 'user', content: input } as Message;
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Check for offline responses first
    const offlineResponse = getOfflineResponse(input);
    if (offlineResponse) {
        // Use offline response
        setTimeout(() => {
          setMessages(prev => [...prev, { 
            role: 'assistant', 
            content: offlineResponse 
          }]);
          setIsLoading(false);
          
          // Show surprise message after first interaction if not already shown
          if (!hasInteracted && !surpriseShown) {
            setHasInteracted(true);
            showSurpriseMessage();
          }
        }, 800);
    } else { // If not offline response, proceed with API call
        try {
        // Send to API route
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            messages: [...messages, userMessage],
            }),
        });
        
        if (!response.ok) {
            throw new Error('Failed to get response');
        }
        
        const data = await response.json();
        
        // Add AI response to chat
        setMessages(prev => [...prev, { 
            role: 'assistant', 
            content: data.message 
        }]);
        } catch (error) {
        console.error('Error:', error);
        setMessages(prev => [...prev, { 
            role: 'assistant', 
            content: "looks like i've run out of creds. try asking about basic contact info instead, or try again later :("
        }]);

        // Show surprise message after first API interaction if not already shown
        if (!hasInteracted && !surpriseShown) {
            setHasInteracted(true);
            showSurpriseMessage();
        }
        } finally {
        setIsLoading(false);
        }
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 pt-24">
      <div className="flex items-center mb-6">
        <Image 
          src="/images/vy_avatar.jpg"
          alt="Vicky Bot"
          width={60}
          height={60}
          className="rounded-full mr-4"
        />
        <div>
          <h1 className="text-3xl font-bold">Chat with Vicky Bot</h1>
          <p className="text-[var(--cream)] opacity-80">Ask me anything and I&apos;ll respond as my true, authentic self!</p>
        </div>
      </div>
      
      <div 
        ref={chatContainerRef}
        className="bg-[var(--discord-lighter-gray)] rounded-lg p-4 mb-4 h-[60vh] overflow-y-auto"
      >
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`mb-4 ${message.role === 'user' ? 'text-right' : 'flex items-start'}`}
          >
            {message.role === 'assistant' && (
              <div className="flex-shrink-0 mr-3">
                <Image 
                  src="/images/vy_avatar.jpg"
                  alt="Vicky Bot"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            )}
            <div 
              className={`inline-block px-4 py-2 rounded-lg max-w-[80%] ${
                message.role === 'user' 
                  ? 'bg-[var(--solid-orange-10)] text-[var(--dark-black)]' 
                  : 'bg-[var(--discord-gray)] text-[var(--cream)]'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="mb-4 flex items-start">
            <div className="flex-shrink-0 mr-3">
              <Image 
                src="/images/vy_avatar.jpg"
                alt="Vicky Bot"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div className="inline-block px-4 py-2 rounded-lg max-w-[80%] bg-[var(--discord-gray)] text-[var(--cream)]">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-[var(--cream)] animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-[var(--cream)] animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 rounded-full bg-[var(--cream)] animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-grow p-2 rounded bg-[var(--discord-lighter-gray)] text-[var(--cream)] focus:outline-none focus:ring-2 focus:ring-[var(--solid-orange-10)]"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-[var(--solid-orange-10)] text-[var(--dark-black)] px-4 py-2 rounded hover:bg-[var(--dark-orange)] transition-colors disabled:opacity-50"
        >
          Send
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <Link 
          href="/"
          className="text-[var(--solid-orange-10)] hover:underline"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}