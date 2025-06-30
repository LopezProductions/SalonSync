import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import logo from '../assets/logo.svg'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: 'For Clients', href: '#clients' },
      { name: 'For Barbers', href: '#barbers' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Features', href: '#features' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Chat with SyncBot', href: '/chat' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Press', href: '/press' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' }
    ]
  }

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/salonsync' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/salonsync' },
    { name: 'Email', icon: Mail, href: 'mailto:hello@salonsync.com' }
  ]

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-salon-off-black text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Logo and Tagline */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img src={logo} alt="SalonSync" className="h-8 w-8" />
                <span className="text-xl font-bold">SalonSync</span>
              </div>
              <p className="text-salon-silver mb-6 leading-relaxed">
                Built for the Cut. SalonSync revolutionizes the way clients and 
                professionals connect, making every appointment seamless and every 
                business more successful.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-salon-silver">
                  <Mail size={16} />
                  <span>hello@salonsync.com</span>
                </div>
                <div className="flex items-center space-x-3 text-salon-silver">
                  <Phone size={16} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-salon-silver">
                  <MapPin size={16} />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-salon-silver hover:text-salon-red transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-salon-silver hover:text-salon-red transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-salon-silver hover:text-salon-red transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-salon-silver hover:text-salon-red transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-salon-charcoal py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-salon-silver text-sm">
              © {currentYear} SalonSync. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-salon-charcoal rounded-full hover:bg-salon-red transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 