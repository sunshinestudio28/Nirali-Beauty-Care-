import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueGrid from './components/ValueGrid';
import Services from './components/Services';
import AboutStory from './components/AboutStory';
import Reviews from './components/Reviews';
import BookingEngine from './components/BookingEngine';
import Footer from './components/Footer';
import LiquidBackdrop from './components/LiquidBackdrop';
import PointerGlow from './components/PointerGlow';
import WhatsAppFAB from './components/WhatsAppFAB';

export default function App() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectService = (serviceName: string, category: string) => {
    setSelectedService(serviceName);
    setSelectedCategory(category);
    
    // Smooth scroll down to the reservation board
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetSelection = () => {
    setSelectedService('');
    setSelectedCategory('');
  };

  const handleReserveClick = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-[#111111] font-sans selection:bg-brand-pink-soft selection:text-brand-pink">
      {/* 1. Interactive Fluid Glow Mouse Tracker */}
      <PointerGlow />

      {/* 2. Dynamic Backdrop System (Organic blurred shapes floating smoothly) */}
      <LiquidBackdrop />

      {/* 3. Sticky Ribbon Navigation */}
      <Navbar />

      {/* 4. Cinematic Hero Block */}
      <Hero 
        onReserveClick={handleReserveClick} 
        onExploreClick={handleExploreClick} 
      />

      {/* 5. Luxury Brand Value Grid */}
      <ValueGrid />

      {/* 6. High-Converting Interactive Services Portfolios */}
      <Services onSelectService={handleSelectService} />

      {/* 7. Storytelling & Heritage Segment */}
      <AboutStory />

      {/* 8. Trust-Hardened Client Acclaim Panel */}
      <Reviews />

      {/* 9. Sleek Dispatch Booking Engine */}
      <BookingEngine 
        selectedService={selectedService} 
        selectedCategory={selectedCategory} 
        resetSelection={handleResetSelection} 
      />

      {/* 10. Spatial Footing Core */}
      <Footer />

      {/* 11. Luxury Floating Action Button */}
      <WhatsAppFAB />
    </div>
  );
}
