import React from 'react'
import { 
  Clock, 
  Bell, 
  Shield, 
  Star, 
  TrendingUp, 
  Calendar, 
  CreditCard, 
  Users,
  Smartphone,
  Zap,
  BarChart3,
  Settings
} from 'lucide-react'

const FeatureShowcase = () => {
  const clientFeatures = [
    {
      icon: Clock,
      title: 'Real-time Booking',
      description: 'See available slots instantly and book in seconds'
    },
    {
      icon: Bell,
      title: 'Smart Reminders',
      description: 'Never miss an appointment with intelligent notifications'
    },
    {
      icon: Shield,
      title: 'No-show Protection',
      description: 'Get refunds if your barber cancels unexpectedly'
    },
    {
      icon: Star,
      title: 'Verified Reviews',
      description: 'Read authentic reviews from real customers'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Book on the go with our mobile-friendly interface'
    },
    {
      icon: Zap,
      title: 'Instant Confirmation',
      description: 'Get immediate booking confirmations via email/SMS'
    }
  ]

  const barberFeatures = [
    {
      icon: Calendar,
      title: 'Calendar Sync',
      description: 'Connect with Google Calendar, Outlook, and more'
    },
    {
      icon: CreditCard,
      title: 'Instant Payments',
      description: 'Receive payments immediately after each service'
    },
    {
      icon: Users,
      title: 'Client Management',
      description: 'Track client history and preferences easily'
    },
    {
      icon: BarChart3,
      title: 'Revenue Insights',
      description: 'Detailed analytics to grow your business'
    },
    {
      icon: Settings,
      title: 'Custom Services',
      description: 'Set your own prices and service offerings'
    },
    {
      icon: TrendingUp,
      title: 'Growth Tools',
      description: 'Marketing features to attract new clients'
    }
  ]

  return (
    <section className="section-padding bg-salon-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-salon-off-black mb-4">
            Powerful Features for Everyone
          </h2>
          <p className="text-xl text-salon-charcoal max-w-3xl mx-auto">
            Whether you're a client looking for the perfect cut or a professional 
            building your business, we've got you covered.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Clients Section */}
          <div id="clients" className="animate-slide-up">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-salon-red/10 rounded-full mb-4">
                <Users size={32} className="text-salon-red" />
              </div>
              <h3 className="text-2xl font-display font-bold text-salon-off-black mb-2">
                For Clients
              </h3>
              <p className="text-salon-charcoal">
                Everything you need for the perfect booking experience
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {clientFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-lg card-hover border border-salon-silver/50"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-salon-red/10 rounded-lg mb-4">
                    <feature.icon size={24} className="text-salon-red" />
                  </div>
                  <h4 className="font-semibold text-salon-off-black mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-salon-charcoal text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Barbers Section */}
          <div id="barbers" className="animate-slide-up animation-delay-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-salon-red/10 rounded-full mb-4">
                <Settings size={32} className="text-salon-red" />
              </div>
              <h3 className="text-2xl font-display font-bold text-salon-off-black mb-2">
                For Barbers
              </h3>
              <p className="text-salon-charcoal">
                Professional tools to streamline your business
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {barberFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-lg card-hover border border-salon-silver/50"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-salon-red/10 rounded-lg mb-4">
                    <feature.icon size={24} className="text-salon-red" />
                  </div>
                  <h4 className="font-semibold text-salon-off-black mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-salon-charcoal text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-salon-silver/50">
            <h3 className="text-2xl font-display font-bold text-salon-off-black mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-salon-charcoal mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied clients and professionals who've transformed 
              their booking experience with SalonSync.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Booking Now
              </button>
              <button className="btn-outline">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureShowcase 