import { Service, ValueProp, Review, StatItem } from './types';

export const VALUES: ValueProp[] = [
  {
    id: 'val_1',
    title: 'Luxury Ambience',
    description: 'A serene, high-ceiling spatial oasis detailed with custom brass, premium marble, and warm organic lighting for total sensory detachment.',
    iconName: 'Sparkles'
  },
  {
    id: 'val_2',
    title: 'Imported Formulations',
    description: 'We form partnerships with exclusive French and Italian labs. Every treatment uses certified organic, premium tier ingredients.',
    iconName: 'Award'
  },
  {
    id: 'val_3',
    title: '100% Sterile Hygiene',
    description: 'Medical-grade autoclave sterilization, disposable single-use kits, and strict touchpoint sanitation protocols for absolute peace of mind.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'val_4',
    title: 'Expert Artisans',
    description: 'Lead stylists and therapists trained directly by international beauty educators, ensuring precise bespoke executions.',
    iconName: 'Crown'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'svc_botox',
    name: 'Advanced Hair Botox Elixir',
    category: 'hair',
    duration: '180 mins',
    price: '₹7,500',
    description: 'Our signature cellular reconstruction treatment. Infuses deep hydrolyzed silk proteins, caviar oil, and amino acids to eradicate frizz and restore glass-like high-fashion sheen.',
    benefits: ['Intense frizz control for 4-6 months', 'Deep cellular hydration & repair', 'Adds high-gloss liquid mirror shine', '100% safe for color-treated hair'],
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    badge: 'Bestseller'
  },
  {
    id: 'svc_keratin',
    name: 'Keratin Luxe Infusion',
    category: 'hair',
    duration: '150 mins',
    price: '₹6,000',
    description: 'Organic premium alignment therapy. Deeply penetrates the hair cortex to smooth coarse cuticles, delivering sleek, fluid motion without losing natural volume.',
    benefits: ['Deep alignment and structural strengthening', 'Cuts styling time in half', 'Resistant to Surat\'s humid coastal climate', 'Formulated with luxury botanical oils'],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'svc_hydra',
    name: 'Bespoke Hydra Facial Elixir',
    category: 'skin',
    duration: '90 mins',
    price: '₹5,500',
    description: 'Surat\'s ultra-premium multi-step medical-grade facial. Combines hydrodynamic vortex exfoliation, cellular vacuum extraction, and localized hyperbaric oxygen nourishment.',
    benefits: ['Instant deep hydration & cellular renewal', 'Noticeably shrinks expanded pores', 'Reduces fine lines with immediate gold glow', 'Custom peptide & antioxidant cocktail infusion'],
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80',
    badge: 'Trending'
  },
  {
    id: 'svc_gold',
    name: 'Imperial Caviar & Gold Glow',
    category: 'skin',
    duration: '75 mins',
    price: '₹6,800',
    description: 'An indulgent, cell-energizing treatment combining pure 24-Karat gold leaf sheets with nourishing black caviar extract. Restores supreme elasticity and luminosity.',
    benefits: ['Accelerates natural cellular collagen synthesis', 'Lifts, firms and defines facial contours', 'Imparts a spectacular, translucent skin glaze', 'Accompanied by a premium stone lymphatic massage'],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'svc_bridal',
    name: 'Royal HD Bridal Signature Look',
    category: 'bridal',
    duration: '240 mins',
    price: '₹18,000',
    description: 'Crafted exclusively by lead artist Nirali. A meticulous, step-by-step masterclass in wedding makeup blending. Features ultra-fine HD camera micro-pigments, bespoke lash extensions, and flawless draping.',
    benefits: ['18-hour sweatproof and teardrop-proof wear', 'Includes premium pre-bridal skin prep ritual', 'Bespoke contouring to flatter structural lighting', 'Pre-wedding trials and hair accessory styling included'],
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
    badge: 'Masterclass'
  },
  {
    id: 'svc_sangeet',
    name: 'Airbrush Premium Silhouette',
    category: 'bridal',
    duration: '180 mins',
    price: '₹12,000',
    description: 'Silicone-based micro-mist airbrush styling for a radiant, weightless second-skin texture. Gives an effortless, velvet-smooth, high-definition canvas under bright event lighting.',
    benefits: ['Flawless, non-cakey skin finish', 'Waterproof, touchproof, and ultra-lightweight', 'Perfect for Sangeet, Reception, or pre-wedding shoots', 'Includes luxury false lashes & premium hair sculpting'],
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev_1',
    author: 'Aishwarya Shah',
    rating: 5,
    date: '2 weeks ago',
    text: 'Nirali Beauty Care is hands down the most luxurious salon in Vesu. I got their Advanced Hair Botox and the results are absolute magic. My hair feels like liquid silk. The staff treated me like royalty!',
    serviceReceived: 'Advanced Hair Botox',
    verified: true
  },
  {
    id: 'rev_2',
    author: 'Pooja Patel',
    rating: 5,
    date: '1 month ago',
    text: 'For my wedding, I chose Nirali for the Royal HD Bridal Makeup. Every single person praised my look. It looked stunning in person and flawless in high-definition photographs. Truly masterclass work.',
    serviceReceived: 'Royal HD Bridal Signature',
    verified: true
  },
  {
    id: 'rev_3',
    author: 'Dr. Shruti Desai',
    rating: 5,
    date: '3 weeks ago',
    text: 'Highly recommend their Bespoke Hydra Facial. Their hygiene levels are impeccable (autoclaved instruments opened right in front of you). The skin hydration level is incredible. Total value for money!',
    serviceReceived: 'Bespoke Hydra Facial',
    verified: true
  },
  {
    id: 'rev_4',
    author: 'Meera Mehta',
    rating: 5,
    date: '1 month ago',
    text: 'The ambience is exceptionally peaceful, unlike other noisy salons. The attention to detail, imported organic products, and highly trained therapists make Nirali the only place I trust in Surat.',
    serviceReceived: 'Imperial Caviar & Gold Glow',
    verified: true
  }
];

export const STATS: StatItem[] = [
  { value: 12, suffix: '+', label: 'Years of Luxe Care' },
  { value: 4.8, suffix: '★', label: 'Google Rating' },
  { value: 365, suffix: '+', label: 'Verified Google Reviews' },
  { value: 15, suffix: 'K+', label: 'Delighted Clients' }
];

export const INSTAGRAM_POSTS = [
  { id: 'ig_1', image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=400&q=80', likes: '1.2k' },
  { id: 'ig_2', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80', likes: '942' },
  { id: 'ig_3', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&q=80', likes: '1.5k' },
  { id: 'ig_4', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80', likes: '2.1k' }
];
