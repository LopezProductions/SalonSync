import React from 'react'
import { MessageCircle, Bot, Sparkles, Clock, Shield } from 'lucide-react'

const SmartBooking = ({ onChatClick }) => {
  const features = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Book appointments anytime, anywhere'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your data is protected with bank-level security'
    },
    {
      icon: Sparkles,
      title: 'AI-Powered',
      description: 'Smart recommendations and instant responses'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-salon-off-black to-salon-charcoal text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-slide-up">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-salon-red/20 rounded-full">
                <Bot size={24} className="text-salon-red" />
              </div>
              <span className="text-salon-red font-semibold">AI Assistant</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Meet{' '}
              <span className="text-salon-red">SyncBot</span>
            </h2>

            <p className="text-xl text-salon-silver mb-8 leading-relaxed">
              Need help? Just ask SyncBot to book your next appointment. Our AI assistant 
              understands your preferences and finds the perfect time slot for you.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-salon-red/20 rounded-full">
                    <feature.icon size={20} className="text-salon-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{feature.title}</h4>
                    <p className="text-salon-silver text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={onChatClick}
              className="btn-primary bg-salon-red hover:bg-salon-red-dark text-white flex items-center space-x-2 group"
            >
              <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              <span>Chat with SyncBot</span>
            </button>
          </div>

          {/* Right Column - Visual */}
          <div className="animate-slide-up animation-delay-200">
            <div className="relative">
              {/* Chat Interface Mockup */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-salon-red rounded-full flex items-center justify-center">
                    <Bot size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">SyncBot</div>
                    <div className="text-salon-silver text-sm">Online</div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-salon-red/20 rounded-2xl rounded-tl-md px-4 py-2 max-w-xs">
                      <p className="text-white text-sm">Hi! I'm here to help you book your next appointment. What type of service are you looking for?</p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-salon-red rounded-2xl rounded-tr-md px-4 py-2 max-w-xs">
                      <p className="text-white text-sm">I need a haircut this weekend</p>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-salon-red/20 rounded-2xl rounded-tl-md px-4 py-2 max-w-xs">
                      <p className="text-white text-sm">Great! I found 3 barbers available this weekend. Would you like to see their profiles?</p>
                    </div>
                  </div>

                  {/* Typing Indicator */}
                  <div className="flex justify-start">
                    <div className="bg-salon-red/20 rounded-2xl rounded-tl-md px-4 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-salon-red rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-salon-red rounded-full animate-bounce animation-delay-200"></div>
                        <div className="w-2 h-2 bg-salon-red rounded-full animate-bounce animation-delay-400"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-salon-red/30 rounded-full blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-salon-red/20 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in animation-delay-200">
            <div className="text-3xl font-bold text-salon-red mb-2">99%</div>
            <div className="text-salon-silver">Accuracy Rate</div>
          </div>
          <div className="animate-fade-in animation-delay-400">
            <div className="text-3xl font-bold text-salon-red mb-2">&lt;30s</div>
            <div className="text-salon-silver">Average Response</div>
          </div>
          <div className="animate-fade-in animation-delay-600">
            <div className="text-3xl font-bold text-salon-red mb-2">24/7</div>
            <div className="text-salon-silver">Always Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SmartBooking 