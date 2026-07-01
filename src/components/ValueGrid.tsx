import { Sparkles, Award, ShieldCheck, Crown } from 'lucide-react';
import { VALUES } from '../data';

export default function ValueGrid() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-brand-pink" />;
      case 'Award':
        return <Award className="w-6 h-6 text-brand-gold" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-brand-pink" />;
      case 'Crown':
        return <Crown className="w-6 h-6 text-brand-gold" />;
      default:
        return <Sparkles className="w-6 h-6 text-brand-pink" />;
    }
  };

  return (
    <section id="values" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-serif text-xs font-semibold tracking-[0.25em] text-brand-pink uppercase block">
            Our Core Sanctuary Principles
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-obsidian leading-tight">
            The Standards of <span className="italic font-light text-brand-gold">Absolute Trust</span>
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto my-4" />
          <p className="font-sans text-sm text-gray-500 font-light max-w-xl mx-auto leading-relaxed">
            Every ritual at Nirali is designed to protect your peace, restore your youth, and elevate your personal glow.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {VALUES.map((val) => (
            <div
              key={val.id}
              className="glass-card p-8 rounded-3xl text-left hover:scale-[1.03] hover:shadow-xl hover:border-brand-pink/35 transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                {/* Custom Highlight Icon Ring */}
                <div className="w-12 h-12 rounded-2xl bg-[#FFFDFD] shadow-sm flex items-center justify-center mb-8 border border-gray-100 group-hover:scale-110 transition-transform duration-500">
                  {getIcon(val.iconName)}
                </div>
                
                <h3 className="font-serif text-lg font-bold text-obsidian mb-3 tracking-wide group-hover:text-brand-pink transition-colors">
                  {val.title}
                </h3>
              </div>
              
              <p className="font-sans text-xs sm:text-sm text-gray-500 font-light leading-relaxed mt-1">
                {val.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
