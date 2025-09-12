import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getChatGPTResponse } from '../services/openai'
import './AIChat.css'

export default function AIChat() {
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: "Hi! I'm FirazAI || here to tell you about *Firaz Fhansurie* || he's a *software engineer* and *entrepreneur* with some amazing stories || ask me anything about his journey, projects, or skills",
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [conversationHistory, setConversationHistory] = useState([])
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])



  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage = {
      type: 'user',
      content: input,
      timestamp: new Date()
    }

    const currentInput = input
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    try {
      // Get ChatGPT response
      const response = await getChatGPTResponse(currentInput, conversationHistory)
      
      const aiResponse = {
        type: 'ai',
        content: response,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, aiResponse])
      
      // Update conversation history
      setConversationHistory(prev => [
        ...prev,
        { role: 'user', content: currentInput },
        { role: 'assistant', content: response }
      ])
      
    } catch (error) {
      console.error('Error getting AI response:', error)
      const errorResponse = {
        type: 'ai',
        content: "Sorry, I'm having trouble connecting right now. But I'd still love to help you learn about Firaz! Try asking me about his experience, projects, or skills.",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorResponse])
    }
    
    setIsTyping(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="ai-chat">
      <div className="chat-header">
        <div className="ai-avatar">
          <div className="avatar-icon">
            <img src="/images/firaz-ai-avatar.png" alt="FirazAI" />
          </div>
          <div className="status-indicator"></div>
        </div>
        <div className="ai-info">
          <h3>FirazAI</h3>
          <p>Ask me anything about Firaz Fhansurie</p>
        </div>
      </div>

      <div className="chat-messages">
        <AnimatePresence>
          {messages.map((message, messageIndex) => {
            // Split AI messages by "||" to create separate bubbles
            if (message.type === 'ai' && message.content.includes('||')) {
              const parts = message.content.split('||').map(part => part.trim()).filter(part => part.length > 0);
              return parts.map((part, partIndex) => (
                <motion.div
                  key={`${messageIndex}-${partIndex}`}
                  className={`message ${message.type}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: partIndex * 0.05 }}
                >
                  <div className="message-avatar">
                    <img src="/images/firaz-ai-avatar.png" alt="FirazAI" />
                  </div>
                  <div className="message-content">
                    <div className="message-text" dangerouslySetInnerHTML={{ 
                      __html: part.replace(/\*([^*]+)\*/g, '<strong>$1</strong>') 
                    }} />
                    <div className="message-time">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </motion.div>
              ));
            } else {
              // Regular message (user or AI without "||")
              return (
                <motion.div
                  key={messageIndex}
                  className={`message ${message.type}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="message-avatar">
                    {message.type === 'ai' ? (
                      <img src="/images/firaz-ai-avatar.png" alt="FirazAI" />
                    ) : '👤'}
                  </div>
                  <div className="message-content">
                    <div className="message-text" dangerouslySetInnerHTML={{ 
                      __html: message.content.replace(/\*([^*]+)\*/g, '<strong>$1</strong>') 
                    }} />
                    <div className="message-time">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </motion.div>
              );
            }
          })}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            className="message ai typing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="message-avatar">
              <img src="/images/firaz-ai-avatar.png" alt="FirazAI" />
            </div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
        <div className="input-container">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about Firaz's experience, skills, projects..."
            rows={1}
          />
          <button onClick={handleSendMessage} disabled={!input.trim()}>
            <span>↗</span>
          </button>
        </div>
      </div>
    </div>
  )
}