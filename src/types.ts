export interface Service {
  id: string;
  name: string;
  category: 'hair' | 'skin' | 'bridal';
  duration: string;
  price: string;
  description: string;
  benefits: string[];
  image: string;
  badge?: string;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  serviceReceived: string;
  verified: boolean;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  category: string;
  service: string;
  date: string;
  timeSlot: string;
  specialNotes?: string;
}
