import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 sm:px-6 lg:px-8 py-4">
      <div 
        id="nav-container"
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-500 ${
          isScrolled 
            ? 'glass-premium-dark py-3 px-6 shadow-2xl scale-[0.98]' 
            : 'glass-premium py-4 px-6 md:px-8 shadow-sm'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Identity Logo */}
          <div 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className={`p-1.5 rounded-lg transition-colors duration-500 ${
              isScrolled ? 'bg-brand-gold/15 text-brand-gold' : 'bg-brand-pink/15 text-brand-pink'
            }`}>
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className={`font-serif text-lg sm:text-xl tracking-[0.2em] font-semibold uppercase transition-colors duration-500 ${
                isScrolled ? 'text-white' : 'text-brand-pink'
              }`}>
                Nirali
              </span>
              <span className={`block font-sans text-[8px] sm:text-[9px] tracking-[0.3em] uppercase transition-colors duration-500 ${
                isScrolled ? 'text-brand-gold' : 'text-obsidian/75'
              }`}>
                Beauty Care • Vesu
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {[
              { label: 'The Legacy', target: 'about' },
              { label: 'Luxe Experience', target: 'services' },
              { label: 'Client Acclaim', target: 'reviews' },
              { label: 'Our Sanctuary', target: 'values' }
            ].map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className={`font-sans text-xs uppercase tracking-[0.2em] font-medium cursor-pointer transition-colors duration-300 relative after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled 
                    ? 'text-gray-300 hover:text-brand-gold after:bg-brand-gold' 
                    : 'text-obsidian/80 hover:text-brand-pink after:bg-brand-pink'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+919876543210" 
              className={`flex items-center gap-2 font-sans text-xs tracking-[0.15em] font-semibold transition-colors ${
                isScrolled ? 'text-gray-300 hover:text-white' : 'text-obsidian hover:text-brand-pink'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>INQUIRE</span>
            </a>
            
            <button
              onClick={() => scrollToSection('booking')}
              className={`gold-shimmer-btn px-5 py-2.5 rounded-xl font-sans text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 shadow-lg ${
                isScrolled 
                  ? 'bg-brand-gold text-obsidian shadow-brand-gold/10 hover:bg-[#ebd06b]' 
                  : 'bg-brand-pink text-white shadow-brand-pink/10 hover:bg-[#d81b60]'
              }`}
            >
              Reserve Session
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors md:hidden ${
              isScrolled ? 'text-white hover:bg-white/10' : 'text-obsidian hover:bg-black/5'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-22 left-4 right-4 z-50 glass-premium-dark rounded-2xl p-6 shadow-2xl border border-white/10 md:hidden animate-[fadeIn_0.3s_ease-out]">
          <div className="flex flex-col gap-5">
            {[
              { label: 'The Legacy', target: 'about' },
              { label: 'Luxe Experience', target: 'services' },
              { label: 'Client Acclaim', target: 'reviews' },
              { label: 'Our Sanctuary', target: 'values' }
            ].map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="w-full text-left font-serif text-lg tracking-widest text-white hover:text-brand-gold transition-colors py-1 border-b border-white/5"
              >
                {link.label}
              </button>
            ))}
            
            <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-white/10">
              <a 
                href="tel:+919876543210" 
                className="flex items-center gap-3 text-gray-300 hover:text-white font-sans text-xs tracking-widest uppercase"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
                <span>Call Concierge (+91 98765 43210)</span>
              </a>
              
              <button
                onClick={() => scrollToSection('booking')}
                className="w-full bg-brand-gold text-obsidian text-center font-sans text-xs tracking-[0.2em] font-semibold py-3 rounded-xl uppercase hover:bg-brand-gold/90 transition-all"
              >
                RESERVE SESSION
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
