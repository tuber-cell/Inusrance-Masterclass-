import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoIsFor from './components/WhoIsFor';
import WhatYouGain from './components/WhatYouGain';
import Testimonials from './components/Testimonials';
import ValueProp from './components/ValueProp';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import RegistrationModal from './components/RegistrationModal';
import './index.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegister = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero onRegister={handleRegister} />
      <WhoIsFor onRegister={handleRegister} />
      <WhatYouGain onRegister={handleRegister} />
      <Testimonials />
      <ValueProp />
      <FAQ />
      <Footer />
      <StickyCTA onRegister={handleRegister} />
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
