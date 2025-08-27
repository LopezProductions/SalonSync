import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import SmartBooking from './components/SmartBooking'
import FeatureShowcase from './components/FeatureShowcase'
import MobileAppTeaser from './components/MobileAppTeaser'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ChatbotModal from './components/ChatbotModal'

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  const openChatbot = () => setIsChatbotOpen(true)
  const closeChatbot = () => setIsChatbotOpen(false)

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header onChatClick={openChatbot} />
        
        <main className="pt-16">
          <Routes>
            <Route path="/" element={
              <>
                <Hero onChatClick={openChatbot} />
                <HowItWorks />
                <SmartBooking onChatClick={openChatbot} />
                <FeatureShowcase />
                <MobileAppTeaser />
                <Testimonials />
                <FAQ />
              </>
            } />
            <Route path="/client" element={<div className="pt-20">Client Dashboard Coming Soon</div>} />
            <Route path="/barber" element={<div className="pt-20">Barber Dashboard Coming Soon</div>} />
            <Route path="/chat" element={<div className="pt-20">Chat Interface Coming Soon</div>} />
          </Routes>
        </main>
        
        <Footer />
        
        <ChatbotModal 
          isOpen={isChatbotOpen} 
          onClose={closeChatbot} 
        />
      </div>
    </Router>
  )
}

export default App 