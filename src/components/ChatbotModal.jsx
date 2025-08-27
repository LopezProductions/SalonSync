import React, { useEffect } from 'react'
import { X, Bot } from 'lucide-react'

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
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] max-h-[700px] mx-4 overflow-hidden">
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

        {/* Dify Chatbot Container */}
        <div className="flex-1 h-full">
          <iframe
            src="http://localhost/chatbot/DE9nENEVxmEDHPMY"
            style={{ width: '100%', height: '100%', minHeight: '700px' }}
            frameBorder="0"
            allow="microphone"
            title="SyncBot AI Assistant"
          />
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