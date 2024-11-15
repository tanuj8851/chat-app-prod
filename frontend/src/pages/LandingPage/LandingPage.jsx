import React from 'react';
import Navbar from '../../components/LandingPageComp/Navbar';
import Hero from './../../components/LandingPageComp/Hero';
import Features from './../../components/LandingPageComp/Features';
import Footer from './../../components/LandingPageComp/Footer';


const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default LandingPage