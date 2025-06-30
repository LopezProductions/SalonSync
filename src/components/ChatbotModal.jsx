import React, { useEffect } from 'react'
import { X, Bot, MessageCircle } from 'lucide-react'

const ChatbotModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] max-h-[600px] mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-salon-silver">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-salon-red rounded-full">
              <Bot size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-salon-off-black">SyncBot</h3>
              <p className="text-sm text-salon-charcoal">AI Assistant</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-salon-light transition-colors duration-200"
          >
            <X size={24} className="text-salon-charcoal" />
          </button>
        </div>

        {/* Chatbot Container */}
        <div className="flex-1 h-full">
          {/* Placeholder for Dify Chatbot */}
          <div className="h-full flex items-center justify-center bg-salon-light">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-salon-red/10 rounded-full mb-4">
                <MessageCircle size={32} className="text-salon-red" />
              </div>
              <h4 className="text-lg font-semibold text-salon-off-black mb-2">
                SyncBot is Ready to Help
              </h4>
              <p className="text-salon-charcoal mb-6 max-w-md">
                Ask me anything about booking appointments, finding barbers, 
                or managing your salon business. I'm here 24/7!
              </p>
              
              {/* Dify Chatbot Embed Placeholder */}
              <div className="bg-white rounded-xl p-8 border border-salon-silver/50 shadow-lg max-w-md mx-auto">
                <div className="text-center">
                  <div className="w-12 h-12 bg-salon-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bot size={24} className="text-salon-red" />
                  </div>
                  <h5 className="font-semibold text-salon-off-black mb-2">
                    Dify Chatbot Integration
                  </h5>
                  <p className="text-sm text-salon-charcoal mb-4">
                    Replace this placeholder with your Dify chatbot embed code:
                  </p>
                  <code className="block text-xs bg-salon-light p-3 rounded text-salon-charcoal text-left">
                    {`<iframe 
  src="https://your-dify-chatbot-url.com"
  width="100%"
  height="400"
  frameborder="0"
/>`}
                  </code>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <button className="px-4 py-2 bg-salon-red/10 text-salon-red rounded-lg text-sm hover:bg-salon-red/20 transition-colors">
                  "I need a haircut"
                </button>
                <button className="px-4 py-2 bg-salon-red/10 text-salon-red rounded-lg text-sm hover:bg-salon-red/20 transition-colors">
                  "Find barbers near me"
                </button>
                <button className="px-4 py-2 bg-salon-red/10 text-salon-red rounded-lg text-sm hover:bg-salon-red/20 transition-colors">
                  "How do I set up my profile?"
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-salon-silver bg-salon-light">
          <p className="text-xs text-salon-charcoal text-center">
            SyncBot is powered by AI and available 24/7. Your conversations are secure and private.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChatbotModal 