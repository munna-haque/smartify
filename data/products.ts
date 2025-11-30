

import { Product } from '../types';

export const products: Product[] = [
  // Mobiles
  {
    id: 'm1',
    name: 'Smartify Phone X Pro',
    brand: 'Smartify',
    category: 'Mobiles & Tablets',
    subCategory: 'Smartphones',
    price: 79999,
    originalPrice: 89999,
    discount: 11,
    description: 'The flagship experience. Bezel-less holographic display.',
    features: ['Holographic Display', 'AI Neural Chip', '108MP Camera'],
    specs: { 'Screen': '6.8 OLED', 'RAM': '12GB', 'Storage': '256GB' },
    image: 'https://videos.openai.com/az/vg-assets/task_01kbb3gwp2f68s7z8zsgcn3ndj%2F1764530711_img_0.webp?se=2025-12-02T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-30T01%3A09%3A01Z&ske=2025-12-07T01%3A14%3A01Z&sks=b&skv=2024-08-04&sig=NDdK0ViRqkg3YyScg8OTGEIKf23L59EXoJWnUMPU3EM%3D&ac=oaivgprodscus2',
    isTrending: true,
    rating: 4.8,
    reviewCount: 1240,
    inStock: true
  },
  {
    id: 'm2',
    name: 'PixelTab Ultra',
    brand: 'Google',
    category: 'Mobiles & Tablets',
    subCategory: 'Tablets',
    price: 45999,
    originalPrice: 49999,
    discount: 8,
    description: 'Perfect for creativity and productivity on the go.',
    features: ['Stylus Support', '120Hz Screen', 'All-day Battery'],
    specs: { 'Screen': '11 inch', 'RAM': '8GB', 'Storage': '128GB' },
    image: 'https://videos.openai.com/az/vg-assets/task_01kbb3kjhze8gv06x0r6hhayjr%2F1764530802_img_0.webp?se=2025-12-02T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-30T01%3A17%3A44Z&ske=2025-12-07T01%3A22%3A44Z&sks=b&skv=2024-08-04&sig=/3E4KRg3C%2Bn822dF1FAbXTF19RdKv349IeX9lnCsCEs%3D&ac=oaivgprodscus2',
    rating: 4.6,
    reviewCount: 320,
    inStock: true
  },

  // Wearables
  {
    id: 'w1',
    name: 'Smartify UltraWatch',
    brand: 'Smartify',
    category: 'Smart Wearables',
    subCategory: 'Smartwatches',
    price: 24999,
    originalPrice: 29999,
    discount: 16,
    description: 'Titanium casing with sapphire crystal glass.',
    features: ['ECG', 'Diving Mode', 'Cellular'],
    specs: { 'Battery': '60H', 'Waterproof': '10ATM' },
    image: 'https://videos.openai.com/az/vg-assets/task_01kbb2pcn5fhvsssre1pzhnekd%2F1764529857_img_0.webp?se=2025-12-02T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-30T01%3A09%3A01Z&ske=2025-12-07T01%3A14%3A01Z&sks=b&skv=2024-08-04&sig=c9l3c8Ceka7rbv8jQwPtUqP8o30mzjEYuN8YD4KcqKw%3D&ac=oaivgprodscus2',
    isExclusive: true,
    rating: 4.9,
    reviewCount: 850,
    inStock: true
  },
  {
    id: 'w2',
    name: 'FitTrack Band 5',
    brand: 'FitTrack',
    category: 'Smart Wearables',
    subCategory: 'Fitness Bands',
    price: 2999,
    originalPrice: 4999,
    discount: 40,
    description: 'Lightweight tracker for your daily runs.',
    features: ['Step Counter', 'Sleep Tracking', 'SpO2'],
    specs: { 'Battery': '14 Days', 'Weight': '15g' },
    image: 'https://videos.openai.com/az/vg-assets/task_01kbb6gv23e22a8bjqsyqbbsg4%2F1764533838_img_0.webp?se=2025-12-02T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-30T01%3A17%3A44Z&ske=2025-12-07T01%3A22%3A44Z&sks=b&skv=2024-08-04&sig=mdaIBd4xD1rpsJrR2tKmFhxbTMFpkUUFt8cPAnUsxlU%3D&ac=oaivgprodscus2',
    rating: 4.4,
    reviewCount: 2100,
    inStock: true
  },

  // Audio
  {
    id: 'a1',
    name: 'Smartify Pods Pro',
    brand: 'Smartify',
    category: 'Audio',
    subCategory: 'Earbuds',
    price: 15999,
    originalPrice: 19999,
    discount: 20,
    description: 'Active Noise Cancellation with Transparency Mode.',
    features: ['ANC', 'Spatial Audio', 'MagSafe Case'],
    specs: { 'Driver': '11mm', 'Playtime': '24H' },
    image: 'https://videos.openai.com/az/vg-assets/task_01kbb7p8ebfd294rm11nkqqk7b%2F1764535065_img_0.webp?se=2025-12-02T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-30T01%3A17%3A44Z&ske=2025-12-07T01%3A22%3A44Z&sks=b&skv=2024-08-04&sig=V1SG3RzyL4agcXFSeQgJtushDrIQe7gMxtgAmvC8GLY%3D&ac=oaivgprodscus2',
    isTrending: true,
    rating: 4.7,
    reviewCount: 1500,
    inStock: true
  },
  {
    id: 'a2',
    name: 'BassBoom 300',
    brand: 'SoundCore',
    category: 'Audio',
    subCategory: 'Bluetooth Speakers',
    price: 8999,
    originalPrice: 12999,
    discount: 30,
    description: '360-degree sound for your parties.',
    features: ['Waterproof IPX7', 'PartyCast', 'RGB Lights'],
    specs: { 'Output': '30W', 'Battery': '12H' },
    image: 'https://videos.openai.com/az/vg-assets/task_01kbb7ww0nf599eemwft58dfg7%2F1764535297_img_0.webp?se=2025-12-02T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-30T01%3A17%3A44Z&ske=2025-12-07T01%3A22%3A44Z&sks=b&skv=2024-08-04&sig=A66a8eYGtf9t1u2dKMMcziVN7IdO%2BMC6L7e4Umwz6tQ%3D&ac=oaivgprodscus2',
    rating: 4.5,
    reviewCount: 600,
    inStock: true
  },

  // Smart Home
  {
    id: 'h1',
    name: 'Smartify Home Hub',
    brand: 'Smartify',
    category: 'Smart Home',
    subCategory: 'Assistants',
    price: 9999,
    description: 'Central control for your smart ecosystem.',
    features: ['Screen', 'Voice Assistant', 'Video Calls'],
    specs: { 'Display': '7 inch', 'Mic': 'Far-field' },
    image: 'https://videos.openai.com/az/vg-assets/task_01kbb85cg3fzybv38wqpv3kmmw%2F1764535556_img_0.webp?se=2025-12-02T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-30T01%3A17%3A44Z&ske=2025-12-07T01%3A22%3A44Z&sks=b&skv=2024-08-04&sig=zgIyQsxH%2BzawdMhSa7maTkGiRt%2B5lWJyuRc%2B6uYpxK8%3D&ac=oaivgprodscus2',
    rating: 4.6,
    reviewCount: 400,
    inStock: true
  },
  {
    id: 'h2',
    name: 'SecureCam 360',
    brand: 'Secure',
    category: 'Smart Home',
    subCategory: 'Cameras',
    price: 3499,
    discount: 10,
    description: 'Indoor security camera with motion detection.',
    features: ['Night Vision', '2-Way Audio', 'Cloud Storage'],
    specs: { 'Res': '1080p', 'Angle': '360 deg' },
    image: 'https://videos.openai.com/az/vg-assets/task_01kbb3n1xzef1aer4vnrfce0nx%2F1764530849_img_0.webp?se=2025-12-02T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-30T01%3A09%3A01Z&ske=2025-12-07T01%3A14%3A01Z&sks=b&skv=2024-08-04&sig=60mQ2l9WM8B00xx/QnqVGbXmeeYaSN0Imdjv9ckUP5w%3D&ac=oaivgprodscus2',
    rating: 4.3,
    reviewCount: 220,
    inStock: true
  },

  // Computers
  {
    id: 'c1',
    name: 'ProBook Air',
    brand: 'TechCorp',
    category: 'Computers',
    subCategory: 'Laptops',
    price: 84999,
    originalPrice: 95000,
    discount: 10,
    description: 'Slim, powerful, and ready for anything.',
    features: ['M2 Chip', 'Retina Display', 'Silent Fanless'],
    specs: { 'CPU': 'M2', 'RAM': '8GB', 'SSD': '256GB' },
    image: 'https://videos.openai.com/az/vg-assets/task_01kbb35j8zegj8yncjby687zp4%2F1764530346_img_0.webp?se=2025-12-02T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-30T01%3A09%3A01Z&ske=2025-12-07T01%3A14%3A01Z&sks=b&skv=2024-08-04&sig=XG7rEI9nT6uvy4H7RDErm9ALOjd9OBvygdm2mfhsdp4%3D&ac=oaivgprodscus2',
    rating: 4.8,
    reviewCount: 550,
    inStock: true
  },
  
  // Gaming
  {
    id: 'g1',
    name: 'GamerX Headset',
    brand: 'GamerX',
    category: 'Gaming',
    subCategory: 'Headsets',
    price: 4999,
    description: 'Hear every footstep with 7.1 surround sound.',
    features: ['7.1 Surround', 'Noise Cancelling Mic', 'RGB'],
    specs: { 'Driver': '50mm', 'Conn': 'USB' },
    image: 'https://videos.openai.com/az/vg-assets/task_01kbb2xh2je4p9v90hry94jdke%2F1764530078_img_0.webp?se=2025-12-02T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-30T01%3A09%3A01Z&ske=2025-12-07T01%3A14%3A01Z&sks=b&skv=2024-08-04&sig=gpnwQ3DDyLMDDUEGXByxHoIjbg2uiAtb0S6FMU93ibc%3D&ac=oaivgprodscus2',
    rating: 4.5,
    reviewCount: 300,
    inStock: true
  },
  {
    id: 'g2',
    name: 'Console Pro 5',
    brand: 'PlayBox',
    category: 'Gaming',
    subCategory: 'Consoles',
    price: 49990,
    description: 'Next-gen gaming is here.',
    features: ['4K 120Hz', 'Ray Tracing', '1TB SSD'],
    specs: { 'GPU': '10.3 TFLOPS', 'Storage': '1TB' },
    image: 'https://videos.openai.com/az/vg-assets/task_01kbb2vybwefhat28bt4j2jdz0%2F1764530010_img_0.webp?se=2025-12-02T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-30T01%3A09%3A01Z&ske=2025-12-07T01%3A14%3A01Z&sks=b&skv=2024-08-04&sig=UNuWBDJjUOgVoTgjyLPMPOae6QwQAe0tQH%2BB//TMhZs%3D&ac=oaivgprodscus2',
    isExclusive: true,
    rating: 4.9,
    reviewCount: 2100,
    inStock: false
  },

  // New Exclusive Deals
  {
    id: 'ex1',
    name: 'HoloLens X',
    brand: 'Smartify',
    category: 'Smart Wearables',
    subCategory: 'Smart Glasses',
    price: 89999,
    originalPrice: 119999,
    discount: 25,
    description: 'Augmented reality glasses with real-time translation and navigation.',
    features: ['AR Overlay', 'Voice Control', 'Lightweight'],
    specs: { 'Battery': '12H', 'Weight': '60g' },
    image: 'https://videos.openai.com/az/vg-assets/task_01kbb37b68e4mbqmf71nz4nhrx%2F1764530394_img_0.webp?se=2025-12-02T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-30T01%3A09%3A01Z&ske=2025-12-07T01%3A14%3A01Z&sks=b&skv=2024-08-04&sig=CgSD%2B56sw9RmFj0WT7/QT0RyIeh2X6c5BFL8EvAlT/Q%3D&ac=oaivgprodscus2',
    isExclusive: true,
    rating: 4.8,
    reviewCount: 150,
    inStock: true
  },
  {
    id: 'ex2',
    name: 'Quantum Drone 4K',
    brand: 'SkyTech',
    category: 'Smart Home',
    subCategory: 'Cameras',
    price: 45999,
    originalPrice: 59999,
    discount: 23,
    description: 'Autonomous follow mode with obstacle avoidance.',
    features: ['4K Video', '30min Flight', 'AI Tracking'],
    specs: { 'Range': '4km', 'Camera': '4K 60fps' },
    image: 'https://videos.openai.com/az/vg-assets/task_01kbb3a41vectvaf6keafmg39k%2F1764530493_img_0.webp?se=2025-12-02T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-30T01%3A09%3A01Z&ske=2025-12-07T01%3A14%3A01Z&sks=b&skv=2024-08-04&sig=2qdCdjagRkKsamE2Jw84X5tQ2QfjDfjlf8Yx3LsmwE0%3D&ac=oaivgprodscus2',
    isExclusive: true,
    rating: 4.7,
    reviewCount: 320,
    inStock: true
  },
  {
    id: 'ex3',
    name: 'NeonGaming Desk',
    brand: 'GamerX',
    category: 'Gaming',
    subCategory: 'Accessories',
    price: 24999,
    originalPrice: 34999,
    discount: 28,
    description: 'RGB integrated smart desk with wireless charging surface.',
    features: ['Full RGB', 'Wireless Charging', 'Height Adjustable'],
    specs: { 'Width': '140cm', 'Load': '100kg' },
    image: 'https://videos.openai.com/az/vg-assets/task_01kbb3c14de02scfztqzd859aj%2F1764530548_img_0.webp?se=2025-12-02T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-30T01%3A09%3A01Z&ske=2025-12-07T01%3A14%3A01Z&sks=b&skv=2024-08-04&sig=ApTCkfED4CaJNaFfEG5baY7uAzxREPmGCLECnUqRpOE%3D&ac=oaivgprodscus2',
    isExclusive: true,
    rating: 4.9,
    reviewCount: 210,
    inStock: true
  },
  {
    id: 'ex4',
    name: 'SonicPulse 360',
    brand: 'SoundCore',
    category: 'Audio',
    subCategory: 'Speakers',
    price: 12999,
    originalPrice: 19999,
    discount: 35,
    description: 'Levitating speaker with 360-degree high-fidelity sound.',
    features: ['Levitation', 'Bluetooth 5.3', 'Ambient Light'],
    specs: { 'Battery': '18H', 'Output': '20W' },
    image: 'https://videos.openai.com/az/vg-assets/task_01kbb3qtagevgb6z4wdvvbe91k%2F1764530943_img_0.webp?se=2025-12-02T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-30T01%3A17%3A44Z&ske=2025-12-07T01%3A22%3A44Z&sks=b&skv=2024-08-04&sig=nzl3SFbarWOjSeD4Se27bkM67Ej5W9WvoM8N9tTmgc0%3D&ac=oaivgprodscus2',
    isExclusive: true,
    rating: 4.6,
    reviewCount: 450,
    inStock: true
  },
  {
    id: 'ex5',
    name: 'NeuralTab Fold',
    brand: 'TechCorp',
    category: 'Mobiles & Tablets',
    subCategory: 'Tablets',
    price: 115999,
    originalPrice: 139999,
    discount: 17,
    description: 'Tablet that folds into a phone. Best of both worlds.',
    features: ['Foldable Screen', 'M2 Chip', '5G'],
    specs: { 'Screen': '14 inch', 'RAM': '16GB' },
    image: 'https://videos.openai.com/az/vg-assets/task_01kbb59kthf9ars14pyec43djq%2F1764532566_img_0.webp?se=2025-12-02T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-30T01%3A17%3A44Z&ske=2025-12-07T01%3A22%3A44Z&sks=b&skv=2024-08-04&sig=JLWBxWPszTNb/XzJl7yqITWT8FwOAH0weJIKOVg7qEc%3D&ac=oaivgprodscus2',
    isExclusive: true,
    rating: 4.8,
    reviewCount: 180,
    inStock: true
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(p => p.category === category || p.subCategory === category);
};

export const getProductById = (id: string) => products.find(p => p.id === id);

export const getTrendingProducts = () => products.filter(p => p.isTrending);

export const getExclusiveDeals = () => products.filter(p => p.isExclusive);

export const searchProducts = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) || 
    p.category.toLowerCase().includes(lowerQuery) ||
    p.brand.toLowerCase().includes(lowerQuery)
  );
};
