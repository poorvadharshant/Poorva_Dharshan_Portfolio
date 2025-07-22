'use client';

import { useEffect, useState } from 'react';
import './ChatWidget.css';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [animateBounce, setAnimateBounce] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateBounce(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating Chat Widget */}
      <div className="chat-orb-container">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`chat-orb ${animateBounce ? 'bounce-in' : ''}`}
          aria-label="Open chat"
        >
          🤖
        </button>

        {!isOpen && (
          <>
            <div className="chat-hint-loop">Talk to Jarvis</div>
            <div className="typing-bubble">...</div>
          </>
        )}
      </div>

      {/* Chat Panel */}
      {isOpen && (
        <div className="chat-modal">
          <div className="chat-header">
            <span>🤖 Jarvis — Your AI Assistant</span>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>
          <iframe
            src="https://cloudflare-chatbot.pages.dev/"
            className="chat-iframe"
            allow="clipboard-write; clipboard-read"
          />
        </div>
      )}
    </>
  );
}
