export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  subCategory?: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  description: string;
  features: string[];
  specs: Record<string, string>;
  image: string;
  images?: string[];
  isTrending?: boolean;
  isExclusive?: boolean;
  rating: number;
  reviewCount: number;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Address {
  id: string;
  type: 'Home' | 'Work' | 'Other';
  name: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  paymentMethod: string;
  shippingAddress: Address;
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  walletBalance: number;
  coins: number;
}

export const MAIN_CATEGORIES = [
  {
    name: "Mobiles & Tablets",
    subs: ["Smartphones", "Tablets", "Accessories", "Power Banks"]
  },
  {
    name: "Smart Wearables",
    subs: ["Smartwatches", "Fitness Bands", "Trackers"]
  },
  {
    name: "Audio",
    subs: ["Earbuds", "Headphones", "Speakers", "Soundbars"]
  },
  {
    name: "Smart Home",
    subs: ["Smart Lights", "Cameras", "Assistants", "Plugs"]
  },
  {
    name: "Computers",
    subs: ["Laptops", "Peripherals", "Storage", "Monitors"]
  },
  {
    name: "Gaming",
    subs: ["Headsets", "Controllers", "Consoles", "Accessories"]
  }
] as const;

declare var process: {
  env: {
    API_KEY: string;
  }
};