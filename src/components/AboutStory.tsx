import { useEffect, useState } from 'react';
import { Award, Heart, CheckCircle2, Star } from 'lucide-react';
import { STATS } from '../data';

export default function AboutStory() {
  const [counters, setCounters] = useState(STATS.map(() => 0));

  useEffect(() => {
    // Elegant counter increment effect on mount
    const durations = [1500, 1500, 1500, 1500];
    const steps = 30;

    const timers = STATS.map((stat, idx) => {
      let currentStep = 0;
      const target = stat.value;
      const increment = target / steps;
      
      const timer = setInterval(() => {
        currentStep++;
        if (currentStep >= steps) {
          setCounters(prev => {
            const next = [...prev];
            next[idx] = target;
            return next;
          });
          clearInterval(timer);
        } else {
          setCounters(prev => {
            const next = [...prev];
            next[idx] = Math.round(increment * currentStep * 10) / 10;
            return next;
          });
        }
      }, durations[idx] / steps);

      return timer;
    });

    return () => timers.forEach(t => clearInterval(t));
  }, []);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Storytelling Text Side */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
            <span className="font-serif text-xs font-semibold tracking-[0.25em] text-brand-pink uppercase block">
              The Legacy & Sanctum
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-obsidian leading-tight">
              Crafting <span className="italic font-light text-brand-gold font-serif">Uncompromised</span> Beauty Over a Decade
            </h2>
            <div className="w-12 h-[1px] bg-brand-gold my-2" />
            
            <p className="font-sans text-sm sm:text-base text-gray-500 font-light leading-relaxed">
              Founded under the visionary artistry of Nirali, our salon in Vesu has established itself as Surat's premier luxury salon. We believe beauty is not an assembly line; it is a personalized, medical-grade curation.
            </p>

            <p className="font-sans text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
              We exclusively deploy premium European formulations, specialized clean-air vacuum techniques for our facials, and gold-standard cellular bond restoration systems for your hair. Every instrument is unsealed freshly from medical autoclaves right before your session.
            </p>

            {/* Micro value rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="flex bg-brand-pink/5 p-2 rounded-xl text-brand-pink">
                  <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span className="font-sans text-xs tracking-wider uppercase font-medium text-obsidian">Custom-tailored consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex bg-brand-pink/5 p-2 rounded-xl text-brand-pink">
                  <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span className="font-sans text-xs tracking-wider uppercase font-medium text-obsidian">Private VIP suites available</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex bg-brand-gold/10 p-2 rounded-xl text-brand-gold">
                  <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span className="font-sans text-xs tracking-wider uppercase font-medium text-obsidian">Exclusive Bridal Lounges</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex bg-brand-gold/10 p-2 rounded-xl text-brand-gold">
                  <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span className="font-sans text-xs tracking-wider uppercase font-medium text-obsidian">Organic Cruelty-Free products</span>
              </div>
            </div>
          </div>

          {/* Bento-style Stat Grid Side */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
              
              {/* Imported Premium Care - Soft Pink */}
              <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-3xl flex flex-col justify-between min-h-[160px] hover:scale-[1.03] transition-all duration-500 shadow-md">
                <div className="w-10 h-10 rounded-full bg-[#FCE4EC] flex items-center justify-center text-[#E91E63]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#111111] mb-1">Imported</h3>
                  <span className="text-[11px] uppercase tracking-[0.25em] font-light text-gray-500">Premium Care Products</span>
                </div>
              </div>

              {/* 12+ Years of Trusted Craft - Obsidian Dark */}
              <div className="bg-[#111111] p-8 rounded-3xl flex flex-col justify-between min-h-[160px] text-white hover:scale-[1.03] transition-all duration-500 shadow-xl border border-white/5">
                <div className="text-4xl font-serif text-[#D4AF37] font-bold">12+</div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] font-light opacity-60 mb-1">Years of</h3>
                  <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-white">Trusted Craft</span>
                </div>
              </div>

              {/* 4.8 Stars rating box */}
              <div className="glass-card p-8 rounded-3xl flex flex-col justify-between min-h-[160px] hover:scale-[1.03] transition-all duration-500 shadow-md">
                <div className="flex gap-0.5 text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold stroke-brand-gold" />
                  ))}
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#111111] mb-1">4.8★ rating</h3>
                  <span className="text-[11px] uppercase tracking-[0.25em] font-light text-gray-500">365+ Google Reviews</span>
                </div>
              </div>

              {/* 15K+ Delighted Clients */}
              <div className="glass-card p-8 rounded-3xl flex flex-col justify-between min-h-[160px] hover:scale-[1.03] transition-all duration-500 shadow-md">
                <div className="text-4xl font-serif text-[#E91E63] font-bold">15K+</div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#111111] mb-1">Delighted</h3>
                  <span className="text-[11px] uppercase tracking-[0.25em] font-light text-gray-500">Suri Beauties</span>
                </div>
              </div>

              {/* Signature Medi-Facial Banner Row */}
              <div className="sm:col-span-2 bg-gradient-to-br from-[#E91E63] to-[#C2185B] p-8 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-white hover:scale-[1.02] transition-all duration-500 shadow-lg">
                <div>
                  <h4 className="text-sm uppercase tracking-[0.2em] font-bold mb-1">Signature Medi-Facial</h4>
                  <p className="text-xs opacity-80 font-light tracking-wide">Hydra-GLO™ Technology Integration</p>
                </div>
                <button 
                  onClick={() => {
                    const el = document.getElementById('services');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-white/20 rounded-full backdrop-blur-md text-[10px] uppercase font-bold tracking-widest hover:bg-white hover:text-brand-pink transition-colors cursor-pointer"
                >
                  View Menu
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
