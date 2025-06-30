import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.svg'

const Header = ({ onChatClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'For Clients', href: '#clients' },
    { name: 'For Barbers', href: '#barbers' },
    { name: 'FAQ', href: '#faq' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-salon-silver">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="SalonSync" className="h-8 w-8" />
            <span className="text-xl font-bold text-salon-off-black">SalonSync</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-salon-charcoal hover:text-salon-red font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onChatClick}
              className="btn-outline text-sm"
            >
              Chat with SyncBot
            </button>
            <Link to="/client" className="btn-primary text-sm">
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-salon-charcoal hover:text-salon-red hover:bg-salon-light"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-salon-silver bg-white">
            <div className="px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-salon-charcoal hover:text-salon-red font-medium py-2 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 space-y-3">
                <button
                  onClick={() => {
                    onChatClick()
                    setIsMobileMenuOpen(false)
                  }}
                  className="btn-outline w-full text-sm"
                >
                  Chat with SyncBot
                </button>
                <Link
                  to="/client"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary w-full text-sm block text-center"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 