import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Marcus Johnson',
      role: 'Client',
      avatar: 'MJ',
      rating: 5,
      quote: 'SalonSync made booking my haircut so easy. I found a great barber in my area and booked instantly. The reminders are perfect!',
      type: 'client'
    },
    {
      name: 'Sarah Chen',
      role: 'Barber',
      avatar: 'SC',
      rating: 5,
      quote: 'Since using SalonSync, my business has grown 40%. The automated booking and payment system saves me hours every week.',
      type: 'barber'
    },
    {
      name: 'David Rodriguez',
      role: 'Client',
      avatar: 'DR',
      rating: 5,
      quote: 'I love how I can see real-time availability and book on the spot. No more phone calls or waiting for callbacks!',
      type: 'client'
    },
    {
      name: 'Lisa Thompson',
      role: 'Stylist',
      avatar: 'LT',
      rating: 5,
      quote: 'The client management features are incredible. I can track preferences and send personalized reminders. My clients love it!',
      type: 'barber'
    },
    {
      name: 'James Wilson',
      role: 'Client',
      avatar: 'JW',
      rating: 5,
      quote: 'SyncBot helped me find the perfect stylist for my wedding. The AI understood exactly what I was looking for.',
      type: 'client'
    },
    {
      name: 'Maria Garcia',
      role: 'Barber',
      avatar: 'MG',
      rating: 5,
      quote: 'The revenue insights help me understand my business better. I can see which services are most popular and optimize accordingly.',
      type: 'barber'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-salon-off-black mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-salon-charcoal max-w-2xl mx-auto">
            Real stories from clients and professionals who've transformed their 
            booking experience with SalonSync.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-salon-silver flex items-center justify-center text-salon-charcoal hover:text-salon-red hover:border-salon-red transition-colors duration-200"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-salon-silver flex items-center justify-center text-salon-charcoal hover:text-salon-red hover:border-salon-red transition-colors duration-200"
            >
              <ChevronRight size={24} />
            </button>

            {/* Testimonial Card */}
            <div className="bg-gradient-to-br from-salon-light to-white rounded-2xl p-8 md:p-12 shadow-lg border border-salon-silver/50">
              <div className="text-center">
                {/* Quote Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-salon-red/10 rounded-full mb-6">
                  <Quote size={32} className="text-salon-red" />
                </div>

                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-salon-off-black mb-8 leading-relaxed italic">
                  "{currentTestimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold ${
                    currentTestimonial.type === 'client' ? 'bg-salon-red' : 'bg-salon-charcoal'
                  }`}>
                    {currentTestimonial.avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-salon-off-black">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-salon-charcoal">
                      {currentTestimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-salon-red' : 'bg-salon-silver'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in animation-delay-200">
            <div className="text-3xl font-bold text-salon-red mb-2">4.9/5</div>
            <div className="text-salon-charcoal">Average Rating</div>
          </div>
          <div className="animate-fade-in animation-delay-400">
            <div className="text-3xl font-bold text-salon-red mb-2">98%</div>
            <div className="text-salon-charcoal">Satisfaction Rate</div>
          </div>
          <div className="animate-fade-in animation-delay-600">
            <div className="text-3xl font-bold text-salon-red mb-2">10K+</div>
            <div className="text-salon-charcoal">Happy Users</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 