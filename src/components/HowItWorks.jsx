import React from 'react'
import { Search, Calendar, UserCheck, Repeat, Settings, RefreshCw, CreditCard, TrendingUp } from 'lucide-react'

const HowItWorks = () => {
  const clientSteps = [
    {
      icon: Search,
      title: 'Find',
      description: 'Discover top-rated barbers and stylists in your area'
    },
    {
      icon: Calendar,
      title: 'Book',
      description: 'Choose your preferred time and book instantly'
    },
    {
      icon: UserCheck,
      title: 'Show up',
      description: 'Get reminders and arrive for your appointment'
    },
    {
      icon: Repeat,
      title: 'Repeat',
      description: 'Book again with your favorite professionals'
    }
  ]

  const barberSteps = [
    {
      icon: Settings,
      title: 'Set up',
      description: 'Create your profile and customize your services'
    },
    {
      icon: RefreshCw,
      title: 'Sync calendar',
      description: 'Connect your existing calendar and availability'
    },
    {
      icon: CreditCard,
      title: 'Get paid',
      description: 'Receive payments instantly after each service'
    },
    {
      icon: TrendingUp,
      title: 'Grow',
      description: 'Build your client base and increase revenue'
    }
  ]

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-salon-off-black mb-4">
            How It Works
          </h2>
          <p className="text-xl text-salon-charcoal max-w-2xl mx-auto">
            Simple steps for both clients and professionals to get started
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Clients Column */}
          <div className="animate-slide-up animation-delay-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-salon-red/10 rounded-full mb-4">
                <UserCheck size={32} className="text-salon-red" />
              </div>
              <h3 className="text-2xl font-display font-bold text-salon-off-black mb-2">
                For Clients
              </h3>
              <p className="text-salon-charcoal">
                Get the perfect cut, every time
              </p>
            </div>

            <div className="space-y-6">
              {clientSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-salon-red text-white rounded-full font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <step.icon size={20} className="text-salon-red" />
                      <h4 className="font-semibold text-salon-off-black">{step.title}</h4>
                    </div>
                    <p className="text-salon-charcoal">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Barbers Column */}
          <div className="animate-slide-up animation-delay-400">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-salon-red/10 rounded-full mb-4">
                <Settings size={32} className="text-salon-red" />
              </div>
              <h3 className="text-2xl font-display font-bold text-salon-off-black mb-2">
                For Barbers
              </h3>
              <p className="text-salon-charcoal">
                Grow your business effortlessly
              </p>
            </div>

            <div className="space-y-6">
              {barberSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-salon-red text-white rounded-full font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <step.icon size={20} className="text-salon-red" />
                      <h4 className="font-semibold text-salon-off-black">{step.title}</h4>
                    </div>
                    <p className="text-salon-charcoal">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-salon-red/5 to-salon-red/10 rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold text-salon-off-black mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-salon-charcoal mb-6 max-w-2xl mx-auto">
              Join thousands of clients and professionals who trust SalonSync for their booking needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Booking Now
              </button>
              <button className="btn-outline">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks 