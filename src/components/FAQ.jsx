import React, { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'How does SalonSync work?',
      answer: 'SalonSync connects clients with barbers and stylists through an intelligent booking platform. Clients can browse profiles, see real-time availability, and book appointments instantly. Professionals can manage their schedule, accept payments, and grow their business with our tools.',
      category: 'general'
    },
    {
      question: 'Is SalonSync free to use?',
      answer: 'For clients, SalonSync is completely free to use. For barbers and stylists, we offer a simple pricing model with a small percentage fee per booking. There are no monthly fees or hidden costs.',
      category: 'general'
    },
    {
      question: 'How do I cancel or reschedule an appointment?',
      answer: 'You can cancel or reschedule appointments directly through the SalonSync platform. Simply go to your booking history and select the appointment you want to modify. Most cancellations are free up to 24 hours before the appointment.',
      category: 'client'
    },
    {
      question: 'What if my barber cancels my appointment?',
      answer: 'If your barber cancels your appointment, you\'ll receive an immediate notification and a full refund. We also help you find an alternative appointment with another qualified professional in your area.',
      category: 'client'
    },
    {
      question: 'How do I set up my barber profile?',
      answer: 'Setting up your profile is quick and easy. Simply sign up, add your services and pricing, upload photos of your work, and set your availability. Our team will review and approve your profile within 24 hours.',
      category: 'barber'
    },
    {
      question: 'Can I sync my existing calendar?',
      answer: 'Yes! SalonSync integrates with Google Calendar, Outlook, and other popular calendar applications. Your existing appointments will be automatically blocked off to prevent double bookings.',
      category: 'barber'
    },
    {
      question: 'How does SyncBot work?',
      answer: 'SyncBot is our AI assistant that helps you find and book appointments. Simply tell SyncBot what you\'re looking for (service type, location, preferred time), and it will recommend the best options available.',
      category: 'general'
    },
    {
      question: 'Is my payment information secure?',
      answer: 'Absolutely. We use bank-level encryption and security measures to protect your payment information. We never store your full credit card details on our servers.',
      category: 'general'
    },
    {
      question: 'What services can I book through SalonSync?',
      answer: 'SalonSync supports a wide range of services including haircuts, styling, coloring, beard trims, and more. Each barber or stylist sets their own service offerings and pricing.',
      category: 'client'
    },
    {
      question: 'How do I get paid as a barber?',
      answer: 'Payments are processed automatically after each service. You\'ll receive your earnings (minus our small service fee) directly to your connected bank account within 1-2 business days.',
      category: 'barber'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-salon-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-salon-red/10 rounded-full mb-4">
            <HelpCircle size={32} className="text-salon-red" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-salon-off-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-salon-charcoal max-w-2xl mx-auto">
            Everything you need to know about SalonSync. Can't find what you're looking for? 
            Chat with SyncBot for instant help.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg border border-salon-silver/50 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-salon-light transition-colors duration-200"
                >
                  <h3 className="font-semibold text-salon-off-black pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      faq.category === 'client' 
                        ? 'bg-salon-red/10 text-salon-red' 
                        : faq.category === 'barber'
                        ? 'bg-salon-charcoal/10 text-salon-charcoal'
                        : 'bg-salon-silver/10 text-salon-charcoal'
                    }`}>
                      {faq.category === 'client' ? 'Client' : 
                       faq.category === 'barber' ? 'Barber' : 'General'}
                    </span>
                    {openIndex === index ? (
                      <ChevronUp size={20} className="text-salon-red" />
                    ) : (
                      <ChevronDown size={20} className="text-salon-charcoal" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4 animate-fade-in">
                    <p className="text-salon-charcoal leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-salon-silver/50">
            <h3 className="text-2xl font-display font-bold text-salon-off-black mb-4">
              Still Have Questions?
            </h3>
            <p className="text-salon-charcoal mb-6 max-w-2xl mx-auto">
              Our support team is here to help. Chat with SyncBot for instant answers 
              or reach out to us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Chat with SyncBot
              </button>
              <button className="btn-outline">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ 