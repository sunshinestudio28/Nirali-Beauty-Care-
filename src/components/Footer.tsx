import { MapPin, Phone, Mail, Instagram, Facebook, Sparkles, Star } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../data';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian text-gray-400 pt-20 pb-10 relative overflow-hidden border-t border-white/5">
      {/* Footer Ambient Background Orb */}
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full bg-brand-gold/4 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[30vw] h-[30vw] rounded-full bg-brand-pink/4 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/5 text-left">
          
          {/* Column 1: Brand & Legacy Capsule */}
          <div className="lg:col-span-4 space-y-6">
            <div onClick={() => scrollToSection('hero')} className="flex items-center gap-2.5 cursor-pointer group">
              <div className="p-1.5 rounded-lg bg-brand-pink/15 text-brand-pink">
                <Sparkles className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <span className="font-serif text-lg tracking-[0.2em] font-semibold text-white uppercase">
                  Nirali
                </span>
                <span className="block font-sans text-[8px] tracking-[0.3em] uppercase text-brand-gold">
                  Beauty Care • Vesu
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              Surat's premier elite destination for advanced Hair Botox, clinical Hydra Facials, and Royal HD Bridal Artistry. Experience pure, uncompromised beauty under strict sterile medical hygiene standards.
            </p>

            {/* Google Verified local search indicators */}
            <div className="inline-flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
              <div className="bg-brand-gold/15 p-2 rounded-xl text-brand-gold">
                <Star className="w-4.5 h-4.5 fill-brand-gold stroke-brand-gold" />
              </div>
              <div>
                <div className="font-serif text-sm font-bold text-white tracking-wider">
                  4.8 / 5.0 Rating
                </div>
                <div className="font-sans text-[9px] tracking-widest text-gray-400 uppercase">
                  Verified on Google Local Maps
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase font-semibold text-white">
              The Experience
            </h4>
            <div className="flex flex-col gap-3.5">
              {[
                { label: 'The Legacy', target: 'about' },
                { label: 'Luxe Treatments', target: 'services' },
                { label: 'Client Reviews', target: 'reviews' },
                { label: 'Our Principles', target: 'values' },
                { label: 'Reserve Session', target: 'booking' }
              ].map((link) => (
                <button
                  key={link.target}
                  onClick={() => scrollToSection(link.target)}
                  className="w-full text-left font-sans text-xs text-gray-400 hover:text-brand-gold transition-colors duration-300 uppercase tracking-widest"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Instagram Visual Showcase */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase font-semibold text-white">
              Luxe Portfolios
            </h4>
            <div className="grid grid-cols-4 gap-2">
              {INSTAGRAM_POSTS.map((post) => (
                <a
                  key={post.id}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square rounded-lg overflow-hidden relative group border border-white/10"
                >
                  <img
                    src={post.image}
                    alt="Luxe design portfolio item"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-pink/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                    <span className="font-sans text-[9px] text-white font-bold tracking-widest">{post.likes}</span>
                  </div>
                </a>
              ))}
            </div>
            <p className="font-sans text-[10px] tracking-widest text-gray-500 uppercase">
              Follow our daily journey @NiraliBeautyCare
            </p>
          </div>

          {/* Column 4: Premium Support Contacts */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase font-semibold text-white">
              Contact Concierge
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-pink mt-0.5 shrink-0" />
                <span className="font-sans text-xs text-gray-400 font-light leading-relaxed">
                  Vesu Main Road, Opposite Luxury Heights, near VIP Circle, Surat, Gujarat 395007
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="tel:+919876543210" className="font-sans text-xs text-gray-400 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-pink shrink-0" />
                <a href="mailto:concierge@niralibeauty.com" className="font-sans text-xs text-gray-400 hover:text-white transition-colors">
                  concierge@niralibeauty.com
                </a>
              </div>
            </div>

            {/* Social channels */}
            <div className="flex gap-3 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-pink text-gray-400 hover:text-white flex items-center justify-center transition-all border border-white/10"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-pink text-gray-400 hover:text-white flex items-center justify-center transition-all border border-white/10"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Legal & Copyright credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] sm:text-xs text-gray-500 font-light">
            © 2026 Nirali Beauty Care Surat. All Rights Reserved. Designed for Vesu's Affluent Elite.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-sans text-[10px] uppercase tracking-widest text-gray-500 hover:text-brand-gold transition-colors">
              Terms of Care
            </a>
            <a href="#" className="font-sans text-[10px] uppercase tracking-widest text-gray-500 hover:text-brand-gold transition-colors">
              Privacy Charter
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
