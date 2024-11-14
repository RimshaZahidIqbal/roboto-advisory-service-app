'use client';

import { useState } from 'react';

export default function Chat() {
    const [messages, setMessages] = useState([
        { id: 1, type: 'ai', content: "Hello, I'm fine. How can I help you?" },
        { id: 2, type: 'user', content: "Hello ChatGPT, how are you today?" },
        { id: 3, type: 'user', content: "What is the best programming language?" },
        { id: 4, type: 'ai', content: "There are many programming languages in the market..." },
        { id: 5, type: 'user', content: "So explain to me more." }
    ]);

    const [input, setInput] = useState('');

    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages([
                ...messages,
                { id: messages.length + 1, type: 'user', content: input },
                { id: messages.length + 2, type: 'ai', content: "Here's my response!" }
            ]);
            setInput('');
        }
    };

    return (
        <div className="flex h-screen w-full bg-white">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white p-4">
                Sidebar
            </div>

            {/* Chat Component */}
            <div className="flex-1 bg-white">
                {/* Navbar */}
                <div className="bg-blue-500 text-white p-4">Navbar</div>

                {/* Chat Messages */}
                <div className="flex-1 p-4 overflow-y-auto">
                    {messages.map((message) => (
                        <div key={message.id} className={`mb-4 ${message.type === 'user' ? 'flex justify-end' : 'flex items-start'}`}>
                            {message.type === 'ai' && (
                                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                                    🤖
                                </div>
                            )}
                            <div className={`p-3 rounded-lg ${message.type === 'user' ? 'bg-blue-500 text-white max-w-xs md:max-w-lg' : 'bg-gray-300 text-gray-900 max-w-xs'}`}>
                                {message.content}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input Bar */}
                <div className="flex p-4 border-t border-gray-300">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 p-2 border rounded-lg"
                        placeholder="Type your message..."
                    />
                    <button onClick={handleSendMessage} className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
