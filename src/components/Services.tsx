import { useState } from 'react';
import { Check, Clock, ChevronRight, Sparkles } from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string, category: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'hair' | 'skin' | 'bridal'>('all');

  const filteredServices = SERVICES.filter(svc => 
    activeTab === 'all' ? true : svc.category === activeTab
  );

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#111111]/3 px-4 sm:px-6 lg:px-8">
      {/* Decorative Blur Orbs inside Section Background */}
      <div className="absolute top-[20%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-brand-pink/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[30vw] h-[30vw] rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-serif text-xs font-semibold tracking-[0.25em] text-brand-pink uppercase block">
            The Luxe Menu
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-obsidian leading-tight">
            Our Premium <span className="italic font-light text-brand-gold">Signature Treatements</span>
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto my-4" />
          <p className="font-sans text-sm text-gray-500 font-light max-w-xl mx-auto leading-relaxed">
            Meticulously sourced, scientifically backed, and artfully tailored beauty treatments for those who demand absolute excellence.
          </p>
        </div>

        {/* Tab Filters with High-End Glassmorphic Styling */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl glass-premium shadow-sm border border-brand-pink-soft">
            {[
              { id: 'all', label: 'All Elite' },
              { id: 'hair', label: 'Hair Botox & Care' },
              { id: 'skin', label: 'Medi-Facials & Skin' },
              { id: 'bridal', label: 'Bridal Artistry' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-2.5 rounded-xl font-sans text-xs tracking-[0.18em] font-semibold uppercase cursor-pointer transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-brand-pink text-white shadow-md shadow-brand-pink/15 scale-[1.02]'
                    : 'text-obsidian/75 hover:text-brand-pink hover:bg-brand-pink-soft/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid of Glassmorphic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((svc) => (
            <div
              key={svc.id}
              className="group glass-premium rounded-[2rem] overflow-hidden border border-white/60 shadow-lg hover:shadow-2xl hover:border-brand-pink/35 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
            >
              
              {/* Image Header with Responsive Glassmorphic Badge Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-pink-soft/10">
                <img 
                  src={svc.image} 
                  alt={svc.name} 
                  className="w-full h-full object-cover transform scale-102 group-hover:scale-106 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Image Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

                {/* Left Top Badge */}
                {svc.badge && (
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-xl glass-premium border border-white/80 text-[10px] tracking-widest text-brand-pink font-semibold uppercase shadow-sm">
                    {svc.badge}
                  </div>
                )}

                {/* Right Bottom Price Tag with high-end Gold/Pink gradient accent */}
                <div className="absolute bottom-4 right-4 px-4 py-2 rounded-xl glass-premium-dark text-brand-gold text-sm font-semibold tracking-wider shadow-md">
                  {svc.price}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-gray-400 font-sans text-[10px] tracking-widest uppercase">
                    <Clock className="w-3.5 h-3.5 text-brand-pink" />
                    <span>{svc.duration}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-obsidian mb-3 tracking-wide group-hover:text-brand-pink transition-colors">
                    {svc.name}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-gray-500 font-light leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  {/* Bulleted Benefits List */}
                  <div className="space-y-2.5 mb-8">
                    {svc.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="p-0.5 rounded-md bg-brand-pink-soft text-brand-pink mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="font-sans text-xs text-gray-600 font-light leading-tight">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Booking CTA */}
                <button
                  onClick={() => onSelectService(svc.name, svc.category)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#FFFDFD] hover:bg-brand-pink hover:text-white border border-brand-pink/20 hover:border-brand-pink text-brand-pink font-sans text-xs font-semibold tracking-[0.2em] py-3.5 rounded-2xl shadow-sm transition-all duration-300 group/btn"
                >
                  <span>RESERVE TREATMENT</span>
                  <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
