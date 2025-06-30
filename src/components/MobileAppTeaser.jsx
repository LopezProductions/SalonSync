import React, { useState } from 'react'
import { Smartphone, Mail, CheckCircle, Apple, Play } from 'lucide-react'

const MobileAppTeaser = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail('')
      // Here you would typically send the email to your backend
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-salon-off-black to-salon-charcoal text-white">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-salon-red/20 rounded-full mb-6">
            <Smartphone size={40} className="text-salon-red" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Coming Soon to{' '}
            <span className="text-salon-red">iOS & Android</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-salon-silver mb-8 max-w-2xl mx-auto leading-relaxed">
            Take SalonSync with you everywhere. Book appointments, manage your schedule, 
            and chat with SyncBot on the go. Available soon on all your devices.
          </p>

          {/* App Store Badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              disabled
              className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20 opacity-50 cursor-not-allowed"
            >
              <Apple size={32} className="text-white" />
              <div className="text-left">
                <div className="text-xs text-salon-silver">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </button>

            <button 
              disabled
              className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20 opacity-50 cursor-not-allowed"
            >
              <Play size={32} className="text-white" />
              <div className="text-left">
                <div className="text-xs text-salon-silver">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </button>
          </div>

          {/* Waitlist Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-display font-bold mb-4">
              Join the Waitlist
            </h3>
            <p className="text-salon-silver mb-6">
              Be the first to know when our mobile app launches and get early access.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-1 relative">
                  <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-salon-silver" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 text-white placeholder-salon-silver focus:outline-none focus:ring-2 focus:ring-salon-red focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary bg-salon-red hover:bg-salon-red-dark text-white px-8"
                >
                  Notify Me
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center space-x-2 text-salon-red">
                <CheckCircle size={24} />
                <span className="font-semibold">You're on the list! We'll notify you soon.</span>
              </div>
            )}
          </div>

          {/* Features Preview */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-fade-in animation-delay-200">
              <div className="flex items-center justify-center w-12 h-12 bg-salon-red/20 rounded-lg mb-4 mx-auto">
                <Smartphone size={24} className="text-salon-red" />
              </div>
              <h4 className="font-semibold text-white mb-2">Mobile Booking</h4>
              <p className="text-salon-silver text-sm">
                Book appointments with just a few taps
              </p>
            </div>
            <div className="animate-fade-in animation-delay-400">
              <div className="flex items-center justify-center w-12 h-12 bg-salon-red/20 rounded-lg mb-4 mx-auto">
                <Mail size={24} className="text-salon-red" />
              </div>
              <h4 className="font-semibold text-white mb-2">Push Notifications</h4>
              <p className="text-salon-silver text-sm">
                Get instant updates about your appointments
              </p>
            </div>
            <div className="animate-fade-in animation-delay-600">
              <div className="flex items-center justify-center w-12 h-12 bg-salon-red/20 rounded-lg mb-4 mx-auto">
                <CheckCircle size={24} className="text-salon-red" />
              </div>
              <h4 className="font-semibold text-white mb-2">Offline Support</h4>
              <p className="text-salon-silver text-sm">
                Access your bookings even without internet
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileAppTeaser 