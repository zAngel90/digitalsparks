import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Stats from './components/Stats'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import Packages from './pages/Packages'
import Contact from './components/Contact'
import SocialManagement from './components/SocialManagement'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Stats />
              <SocialManagement />
              <Pricing />
            </>
          } />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
