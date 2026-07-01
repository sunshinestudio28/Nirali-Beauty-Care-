import { Star, CheckCircle, Quote } from 'lucide-react';
import { REVIEWS } from '../data';

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-[#111111]/3 px-4 sm:px-6 lg:px-8">
      {/* Background Soft Orbs */}
      <div className="absolute top-[30%] left-[5%] w-[25vw] h-[25vw] rounded-full bg-brand-pink/4 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[25vw] h-[25vw] rounded-full bg-brand-gold/4 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-serif text-xs font-semibold tracking-[0.25em] text-brand-pink uppercase block">
            Client Acclaim
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-obsidian leading-tight">
            Loved by Surat's <span className="italic font-light text-brand-gold">Discerning Elite</span>
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto my-4" />
          <p className="font-sans text-sm text-gray-500 font-light max-w-xl mx-auto leading-relaxed">
            Discover what our premium clients say about their bespoke Hair Botox, Hydra Facials, and Bridal makeovers.
          </p>
        </div>

        {/* 4.8 Rating Summary Banner */}
        <div className="max-w-xl mx-auto rounded-[2rem] glass-premium p-6 mb-12 sm:mb-16 border border-white flex flex-col sm:flex-row items-center justify-center gap-6 shadow-md">
          <div className="text-center sm:text-left">
            <div className="font-serif text-4xl font-extrabold text-obsidian tracking-wider flex items-center justify-center sm:justify-start">
              4.8
              <span className="text-xs font-sans text-brand-gold font-semibold tracking-widest ml-1 uppercase">★ rating</span>
            </div>
            <div className="font-sans text-xs tracking-widest text-gray-500 uppercase mt-1">
              Surat's Highest Rated Salon
            </div>
          </div>
          <div className="h-[1px] w-12 sm:h-12 sm:w-[1px] bg-brand-pink-soft" />
          <div className="text-center sm:text-left">
            <div className="font-serif text-3xl font-extrabold text-brand-pink tracking-wider">
              365+
            </div>
            <div className="font-sans text-xs tracking-widest text-gray-500 uppercase mt-1">
              Verified Google Reviews
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="glass-card p-8 sm:p-10 rounded-[2.5rem] border border-white/75 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between text-left relative group"
            >
              <div className="absolute top-8 right-8 text-brand-pink-soft/50 group-hover:text-brand-pink/15 transition-colors duration-500">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              <div>
                {/* Stars and Service Flag */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div className="flex gap-0.5 text-brand-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-gold stroke-brand-gold" />
                    ))}
                  </div>
                  
                  <span className="px-3 py-1 rounded-full bg-brand-pink-soft text-brand-pink text-[10px] tracking-wider font-semibold uppercase">
                    {rev.serviceReceived}
                  </span>
                </div>

                <p className="font-sans text-sm sm:text-base text-gray-600/90 font-light leading-relaxed mb-8 italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-6 border-t border-brand-pink-soft/20">
                <div>
                  <div className="font-serif text-base font-bold text-obsidian flex items-center gap-1.5">
                    {rev.author}
                    {rev.verified && (
                      <CheckCircle className="w-4 h-4 text-emerald-500 fill-emerald-50" />
                    )}
                  </div>
                  <div className="font-sans text-[10px] tracking-widest text-gray-400 uppercase mt-0.5">
                    Verified Google Reviewer
                  </div>
                </div>
                
                <span className="font-sans text-[11px] text-gray-400 font-light">
                  {rev.date}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
