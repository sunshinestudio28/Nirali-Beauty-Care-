import { Star, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onReserveClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onReserveClick, onExploreClick }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-8 text-left">
            
            {/* Elegant Floating Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium text-brand-pink text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-spin-slow" />
              <span>Surat's Finest Luxury Salon</span>
            </div>

            {/* Breathtaking Typography */}
            <div className="space-y-6">
              <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl tracking-[-0.02em] text-obsidian leading-[0.95]">
                Reveal Your <br />
                <i className="text-brand-pink font-light italic font-serif">True Beauty</i>
              </h1>
              
              <p className="font-sans text-sm sm:text-base text-gray-500 leading-relaxed max-w-md font-light">
                Experience the pinnacle of luxury grooming in Vesu, Surat. From specialized Hair Botox to couture Bridal HD Makeup, we curate your transformation with artisanal precision.
              </p>
            </div>

            {/* High-Contrast Interactive Calls-to-Action */}
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <button
                onClick={onReserveClick}
                className="gold-shimmer-btn flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-brand-pink text-white font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase px-8 py-4.5 rounded-xl shadow-lg shadow-brand-pink/15 hover:bg-[#d81b60] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>Reserve Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onExploreClick}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 border border-brand-pink/20 glass-premium text-obsidian font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase px-8 py-4.5 rounded-xl hover:bg-brand-pink/5 hover:border-brand-pink transition-all duration-300"
              >
                <span>Explore Portfolios</span>
              </button>
            </div>

            {/* Premium Trust Architecture */}
            <div className="flex flex-wrap items-center gap-8 pt-4 border-t border-brand-pink-soft/40 w-full">
              <div className="flex items-center gap-3">
                {/* 4.8 Stars and Google reviews indicator */}
                <div className="flex bg-brand-gold/10 p-2.5 rounded-xl text-brand-gold">
                  <Star className="w-5 h-5 fill-brand-gold stroke-brand-gold" />
                </div>
                <div>
                  <div className="font-serif text-lg font-bold text-obsidian tracking-wider">
                    4.8<span className="text-xs text-brand-gold font-sans font-semibold ml-0.5">★</span>
                  </div>
                  <div className="font-sans text-[10px] tracking-widest text-gray-500 uppercase">
                    365+ Google Reviews
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex bg-brand-pink/10 p-2.5 rounded-xl text-brand-pink">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-serif text-lg font-bold text-obsidian tracking-wider">
                    100%
                  </div>
                  <div className="font-sans text-[10px] tracking-widest text-gray-500 uppercase">
                    Medical Sterile Standard
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Hero Right Column: High Fashion Editorial Layout */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[360px] sm:max-w-[420px] lg:max-w-none">
              
              {/* Premium Background Soft Golden Frame */}
              <div className="absolute inset-4 -right-2 -bottom-2 rounded-[2rem] border border-brand-gold/30 -z-10" />

              {/* High Fashion Main Image Card with Glass Border */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/80 aspect-[4/5] group bg-brand-pink-soft/10">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80" 
                  alt="Nirali Beauty Care Luxury Salon Experience" 
                  className="w-full h-full object-cover transform scale-102 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded Floating Glass Trust Shield */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-premium text-left shadow-lg border border-white/50">
                  <span className="font-serif text-xs font-semibold tracking-[0.1em] text-brand-pink uppercase block mb-1">
                    Signature Beauty Studio
                  </span>
                  <span className="font-sans text-xs text-gray-600 font-light block leading-normal">
                    Designed to elevate. Built with medical sanitation protocols. Surat's choice of elegance.
                  </span>
                </div>
              </div>

              {/* Secondary Floating Asset Card (Overlapped) */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-2xl overflow-hidden shadow-xl border-2 border-white/90 hidden sm:block">
                <img 
                  src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=300&q=80" 
                  alt="Luxury beauty products and elixirs" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Award Medallion */}
              <div className="absolute -bottom-4 -left-6 rounded-2xl p-4 glass-premium border border-white flex flex-col items-center shadow-lg text-center min-w-[120px] hidden sm:flex">
                <span className="font-serif text-xl font-bold text-brand-gold">4.8★</span>
                <span className="font-sans text-[8px] tracking-[0.15em] uppercase text-gray-500 font-medium">Rating</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
