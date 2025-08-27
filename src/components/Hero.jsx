import React from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight } from 'lucide-react'

const Hero = ({ onChatClick }) => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-salon-light to-white">
      <div className="container-custom section-padding">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-salon-off-black mb-6 leading-tight">
            Your Next Cut,{' '}
            <span className="text-gradient">Synced to Perfection.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-salon-charcoal mb-12 max-w-3xl mx-auto leading-relaxed">
            Book your next appointment instantly or chat with our AI assistant.
            Experience the future of salon booking.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('#clients')}
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 group"
            >
              <span>I'm a Client</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('#barbers')}
              className="btn-secondary text-lg px-8 py-4 flex items-center space-x-2 group"
            >
              <span>I'm a Barber</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Chat with SyncBot Button */}
          <button
            onClick={onChatClick}
            className="inline-flex items-center space-x-2 text-salon-red hover:text-salon-red-dark font-semibold text-lg transition-colors duration-200 group"
          >
            <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
            <span>Chat with SyncBot</span>
          </button>

          {/* Stats or Social Proof */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in animation-delay-200">
              <div className="text-3xl font-bold text-salon-red mb-2">10K+</div>
              <div className="text-salon-charcoal">Happy Clients</div>
            </div>
            <div className="animate-fade-in animation-delay-400">
              <div className="text-3xl font-bold text-salon-red mb-2">500+</div>
              <div className="text-salon-charcoal">Barbers & Stylists</div>
            </div>
            <div className="animate-fade-in animation-delay-600">
              <div className="text-3xl font-bold text-salon-red mb-2">50K+</div>
              <div className="text-salon-charcoal">Appointments Booked</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-salon-red/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-salon-red/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-salon-red/10 rounded-full blur-xl"></div>
      </div>
    </section>
  )
}

export default Hero 