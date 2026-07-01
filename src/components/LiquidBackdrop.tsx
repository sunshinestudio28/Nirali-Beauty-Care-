import { useEffect, useState } from 'react';

export default function LiquidBackdrop() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none bg-[#FFFDFD]">
      {/* Primary Soft Rose Floating Shape */}
      <div 
        className="absolute top-[10%] left-[5%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full bg-[#FCE4EC]/50 blur-[120px] animate-float-slow" 
        style={{ transformOrigin: 'center center' }}
      />
      
      {/* Premium Soft Gold Floating Shape */}
      <div 
        className="absolute bottom-[15%] right-[5%] w-[40vw] h-[40vw] max-w-[550px] max-h-[550px] rounded-full bg-[#D4AF37]/10 blur-[110px] animate-float-medium"
        style={{ transformOrigin: 'center center' }}
      />

      {/* Tertiary Fuchsia Ambient Shroud */}
      <div 
        className="absolute top-[50%] left-[45%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full bg-[#E91E63]/6 blur-[130px] animate-float-reverse"
        style={{ transformOrigin: 'center center' }}
      />

      {/* Noise Texture Overlay for Editorial Luxury Vibe */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
