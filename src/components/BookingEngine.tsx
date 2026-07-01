import React, { useState, useEffect, FormEvent } from 'react';
import { Clock, MapPin, Phone, Calendar, Sparkles, MessageSquare, Check, User } from 'lucide-react';
import { SERVICES } from '../data';
import { BookingFormData } from '../types';

interface BookingEngineProps {
  selectedService: string;
  selectedCategory: string;
  resetSelection: () => void;
}

export default function BookingEngine({ selectedService, selectedCategory, resetSelection }: BookingEngineProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    category: 'hair',
    service: 'Advanced Hair Botox Elixir',
    date: '',
    timeSlot: '10:00 AM - 12:00 PM',
    specialNotes: ''
  });

  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Sync state if selectedService is passed from parent card
  useEffect(() => {
    if (selectedService && selectedCategory) {
      setFormData(prev => ({
        ...prev,
        category: selectedCategory,
        service: selectedService
      }));
    }
  }, [selectedService, selectedCategory]);

  const categories = [
    { id: 'hair', label: 'Hair Botox & Care' },
    { id: 'skin', label: 'Medi-Facials & Skin' },
    { id: 'bridal', label: 'Bridal Artistry' }
  ];

  // Filtered services for select dropdown based on selected category
  const activeServices = SERVICES.filter(s => s.category === formData.category);

  // Ensure selected service is always valid when category changes
  const handleCategoryChange = (cat: string) => {
    const servicesForCat = SERVICES.filter(s => s.category === cat);
    setFormData(prev => ({
      ...prev,
      category: cat,
      service: servicesForCat[0]?.name || '',
    }));
  };

  const timeSlots = [
    '10:00 AM - 12:00 PM',
    '12:00 PM - 02:00 PM',
    '02:00 PM - 04:00 PM',
    '04:00 PM - 06:00 PM',
    '06:00 PM - 08:00 PM'
  ];

  // Direct WhatsApp Integration message formatting
  const generateWhatsAppLink = () => {
    const baseNum = '919876543210'; // Professional Surat line placeholder
    const text = `Hello Nirali Beauty Care, I would like to reserve a premium beauty session.
    
*Details of my Booking:*
• *Name:* ${formData.name}
• *Phone:* ${formData.phone}
• *Treatment Category:* ${categories.find(c => c.id === formData.category)?.label}
• *Requested Service:* ${formData.service}
• *Preferred Date:* ${formData.date}
• *Preferred Time Slot:* ${formData.timeSlot}
${formData.specialNotes ? `• *Special Requests:* ${formData.specialNotes}` : ''}

Please confirm my appointment slot. Thank you!`;

    return `https://wa.me/${baseNum}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      return;
    }
    setBookingSuccess(true);
    // Let the user redirect via WhatsApp link in next step or trigger instantly
  };

  return (
    <section id="booking" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-serif text-xs font-semibold tracking-[0.25em] text-brand-pink uppercase block">
            Reserve Sanctuary Time
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-obsidian leading-tight">
            Schedule Your <span className="italic font-light text-brand-gold">Bespoke Session</span>
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto my-4" />
          <p className="font-sans text-sm text-gray-500 font-light max-w-xl mx-auto leading-relaxed">
            Ensure your preferred time slot with our master stylists. Connect directly via WhatsApp dispatch for instant processing.
          </p>
        </div>

        {/* Master Booking Glass Panel (Split-Grid Architecture) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/60">
          
          {/* Left Panel: Luxury Sanctuary Info (Obsidian Backdrop) */}
          <div className="lg:col-span-5 bg-obsidian text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden text-left">
            {/* Background luxury gradient blur */}
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-brand-gold/10 blur-[50px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-brand-pink/10 blur-[50px] pointer-events-none" />
            
            <div className="space-y-8 relative z-10">
              <div>
                <span className="font-sans text-[10px] tracking-[0.2em] text-brand-gold font-semibold uppercase block mb-1">
                  Nirali Beauty Care
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl tracking-wide font-bold">
                  Surat's Purest Sanctuary
                </h3>
              </div>

              <p className="font-sans text-xs text-gray-400 font-light leading-relaxed">
                Experience world-class hospitality in the Vesu area of Surat. Secure access to fully sanitized single-use setups, customized acoustic therapies, and customized herbal teas.
              </p>

              {/* Meta information lists */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-brand-pink/10 text-brand-pink">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs tracking-wider text-brand-gold font-bold uppercase">The Sanctuary Address</h4>
                    <p className="font-sans text-xs text-gray-300 font-light mt-1">
                      Vesu Main Road, Opposite Luxury Heights,<br />
                      Near VIP Circle, Vesu, Surat, Gujarat 395007
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-brand-gold/10 text-brand-gold">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs tracking-wider text-brand-pink font-bold uppercase">Sanctuary Timings</h4>
                    <p className="font-sans text-xs text-gray-300 font-light mt-1">
                      Tuesday – Sunday: 10:00 AM – 08:30 PM<br />
                      <span className="text-brand-pink/80 font-medium">Closed on Mondays</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-brand-pink/10 text-brand-pink">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs tracking-wider text-brand-gold font-bold uppercase">Concierge Helpline</h4>
                    <p className="font-sans text-xs text-gray-300 font-light mt-1">
                      +91 98765 43210 (Enquiries & Bridal Consultations)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Premium Map Locator Indicator Badge */}
            <div className="mt-12 pt-6 border-t border-white/10 relative z-10">
              <span className="font-sans text-[10px] tracking-[0.15em] text-gray-400 uppercase block mb-1">
                Verified Salon Rating
              </span>
              <span className="font-serif text-sm text-brand-gold font-bold">
                4.8★ Luxury Destination with 365+ Reviews
              </span>
            </div>

          </div>

          {/* Right Panel: Sleek Minimalist Inputs (Premium Frosting) */}
          <form 
            onSubmit={handleSubmit} 
            className="lg:col-span-7 glass-premium p-8 sm:p-12 flex flex-col justify-between text-left space-y-6"
          >
            {bookingSuccess ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-lg animate-bounce">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-obsidian">Appointment Created</h3>
                  <p className="font-sans text-sm text-gray-500 font-light max-w-sm mx-auto">
                    To finalize and instantly lock your luxurious slot with Nirali, please click below to dispatch details directly to our WhatsApp front desk.
                  </p>
                </div>

                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-shimmer-btn inline-flex items-center gap-3 bg-brand-pink hover:bg-[#d81b60] text-white font-sans text-xs sm:text-sm font-bold tracking-[0.2em] uppercase px-8 py-4.5 rounded-2xl shadow-lg shadow-brand-pink/20 transition-all duration-300"
                >
                  <MessageSquare className="w-5 h-5 fill-white stroke-none" />
                  <span>DISPATCH VIA WHATSAPP</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setBookingSuccess(false);
                    resetSelection();
                  }}
                  className="font-sans text-xs text-brand-pink hover:text-brand-gold uppercase tracking-widest font-semibold mt-4 transition-colors"
                >
                  Edit details / book another
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                
                {/* Visual Selection feedback indicator if pre-filled */}
                {selectedService && (
                  <div className="p-3.5 rounded-2xl bg-brand-pink-soft/40 border border-brand-pink/15 flex items-center justify-between text-left">
                    <div>
                      <span className="font-sans text-[9px] tracking-widest text-brand-pink font-semibold uppercase block">Pre-selected Session</span>
                      <span className="font-serif text-xs font-bold text-obsidian">{selectedService}</span>
                    </div>
                    <button 
                      type="button" 
                      onClick={() => {
                        resetSelection();
                        setFormData(prev => ({ ...prev, service: SERVICES[0].name }));
                      }}
                      className="font-sans text-[10px] text-brand-pink hover:text-brand-gold uppercase tracking-wider font-semibold"
                    >
                      Clear
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col">
                    <label className="font-sans text-[10px] tracking-widest text-gray-400 uppercase font-semibold mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g., Anjali Shah"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-100 bg-white/70 focus:bg-white focus:ring-2 focus:ring-brand-pink/25 focus:border-brand-pink focus:outline-none font-sans text-sm text-obsidian transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="flex flex-col">
                    <label className="font-sans text-[10px] tracking-widest text-gray-400 uppercase font-semibold mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g., +91 98765 43210"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-100 bg-white/70 focus:bg-white focus:ring-2 focus:ring-brand-pink/25 focus:border-brand-pink focus:outline-none font-sans text-sm text-obsidian transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Category dropdown */}
                  <div className="flex flex-col">
                    <label className="font-sans text-[10px] tracking-widest text-gray-400 uppercase font-semibold mb-2">
                      Service Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => handleCategoryChange(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-100 bg-white/70 focus:bg-white focus:ring-2 focus:ring-brand-pink/25 focus:border-brand-pink focus:outline-none font-sans text-sm text-obsidian transition-all duration-300"
                    >
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Service dropdown updates based on category */}
                  <div className="flex flex-col">
                    <label className="font-sans text-[10px] tracking-widest text-gray-400 uppercase font-semibold mb-2">
                      Select Specific Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-100 bg-white/70 focus:bg-white focus:ring-2 focus:ring-brand-pink/25 focus:border-brand-pink focus:outline-none font-sans text-sm text-obsidian transition-all duration-300"
                    >
                      {activeServices.map(svc => (
                        <option key={svc.id} value={svc.name}>{svc.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Date selection */}
                  <div className="flex flex-col">
                    <label className="font-sans text-[10px] tracking-widest text-gray-400 uppercase font-semibold mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-100 bg-white/70 focus:bg-white focus:ring-2 focus:ring-brand-pink/25 focus:border-brand-pink focus:outline-none font-sans text-sm text-obsidian transition-all duration-300"
                    />
                  </div>

                  {/* Time slots selection */}
                  <div className="flex flex-col">
                    <label className="font-sans text-[10px] tracking-widest text-gray-400 uppercase font-semibold mb-2">
                      Preferred Time Range
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-100 bg-white/70 focus:bg-white focus:ring-2 focus:ring-brand-pink/25 focus:border-brand-pink focus:outline-none font-sans text-sm text-obsidian transition-all duration-300"
                    >
                      {timeSlots.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Special Requests Notes */}
                <div className="flex flex-col">
                  <label className="font-sans text-[10px] tracking-widest text-gray-400 uppercase font-semibold mb-2">
                    Special Requests or Bridal Specifications (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.specialNotes}
                    onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                    placeholder="Describe any skin sensitivities, bridal trial preferences, or general notes..."
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-100 bg-white/70 focus:bg-white focus:ring-2 focus:ring-brand-pink/25 focus:border-brand-pink focus:outline-none font-sans text-sm text-obsidian resize-none transition-all duration-300"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-brand-pink hover:bg-[#d81b60] text-white font-sans text-xs sm:text-sm font-semibold tracking-[0.25em] py-4 rounded-xl shadow-lg shadow-brand-pink/15 transition-all duration-300 uppercase cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-brand-gold animate-pulse" />
                  <span>Lock Appointment Details</span>
                </button>

              </div>
            )}
          </form>

        </div>

      </div>
    </section>
  );
}
