import { useState } from 'react';
import { MessageSquare, Sparkles } from 'lucide-react';

export default function WhatsAppFAB() {
  const [showTooltip, setShowTooltip] = useState(false);

  const phoneNum = '919876543210';
  const welcomeText = 'Hello Nirali Beauty Care, I would like to inquire about your premium salon collections and schedule a personalized styling consultation.';
  const whatsAppUrl = `https://wa.me/${phoneNum}?text=${encodeURIComponent(welcomeText)}`;

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 pointer-events-auto"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Luxury Expandable Glass tooltip */}
      <div 
        className={`px-4 py-2.5 rounded-2xl glass-premium-dark text-white border border-white/10 shadow-2xl transition-all duration-300 flex items-center gap-2 whitespace-nowrap text-left ${
          showTooltip 
            ? 'opacity-100 translate-x-0 scale-100' 
            : 'opacity-0 translate-x-4 scale-90 pointer-events-none'
        }`}
      >
        <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
        <div>
          <span className="font-serif text-[10px] text-brand-gold tracking-widest uppercase block font-bold">Luxe Concierge</span>
          <span className="font-sans text-[11px] font-light text-gray-300">Instant WhatsApp Chat</span>
        </div>
      </div>

      {/* FAB Main Pulsating Circle */}
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-brand-pink text-white flex items-center justify-center shadow-xl shadow-brand-pink/20 hover:scale-110 active:scale-95 hover:bg-[#d81b60] transition-all duration-300 group cursor-pointer"
        aria-label="Direct WhatsApp Concierge Chat"
      >
        {/* Breathing outer highlight ring */}
        <span className="absolute inset-0 rounded-full border-2 border-brand-pink animate-ping opacity-45 pointer-events-none" />
        
        {/* Subtle decorative gold sparkles icon inside FAB */}
        <Sparkles className="absolute top-2.5 right-2.5 w-3 h-3 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
        
        {/* WhatsApp or Chat icon */}
        <MessageSquare className="w-6 h-6 fill-white stroke-none transform group-hover:rotate-12 transition-transform duration-300" />
      </a>
    </div>
  );
}
