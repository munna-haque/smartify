
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { 
  ArrowRight, Zap, ShieldCheck, Truck, Cpu, Play, Mail, 
  Timer, Star, TrendingUp, Smartphone, Watch, Headphones, 
  Home as HomeIcon, Gamepad2, ChevronRight, Tag, Layers
} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import RevealOnScroll from '../components/RevealOnScroll';
import { getTrendingProducts, getExclusiveDeals, products } from '../data/products';

const { Link } = ReactRouterDOM;

const Home: React.FC = () => {
  const trending = getTrendingProducts();
  const exclusive = getExclusiveDeals();
  // Simulate new arrivals by taking the reversed list
  const newArrivals = [...products].reverse().slice(0, 4);

  const categories = [
    { 
      name: 'Smartphones', 
      icon: <Smartphone size={24} />, 
      count: '24 Models',
      image: 'https://videos.openai.com/az/vg-assets/task_01kbb8w3hmf75v6npksvxptx38%2F1764536301_img_0.webp?se=2025-12-02T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-30T01%3A17%3A44Z&ske=2025-12-07T01%3A22%3A44Z&sks=b&skv=2024-08-04&sig=oyjgl3wLefrkByfP2xPDVnW6T3m%2BQ4RhjdARlZ%2BMhoA%3D&ac=oaivgprodscus2',
      textColor: 'text-blue-400',
      hoverShadow: 'hover:shadow-[0_10px_50px_-10px_rgba(59,130,246,0.6)]',
      hoverBorder: 'hover:border-blue-400',
      titleHover: 'group-hover:text-blue-100'
    },
    { 
      name: 'Smartwatches', 
      icon: <Watch size={24} />, 
      count: '18 Models',
      image: 'https://videos.openai.com/az/vg-assets/task_01kbb91pxne6nv456fkcjpwqaq%2F1764536492_img_0.webp?se=2025-12-02T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-30T01%3A17%3A44Z&ske=2025-12-07T01%3A22%3A44Z&sks=b&skv=2024-08-04&sig=wKWh%2B4KgMSjnceGXpdqsgk%2B0K6VYh2a0owgkkCuU6PU%3D&ac=oaivgprodscus2',
      textColor: 'text-purple-400',
      hoverShadow: 'hover:shadow-[0_10px_50px_-10px_rgba(168,85,247,0.6)]',
      hoverBorder: 'hover:border-purple-400',
      titleHover: 'group-hover:text-purple-100'
    },
    { 
      name: 'Audio', 
      icon: <Headphones size={24} />, 
      count: '32 Items',
      image: 'https://videos.openai.com/az/vg-assets/task_01kbb93qagfhftcvm1j2wt8txr%2F1764536575_img_1.webp?se=2025-12-02T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-30T01%3A17%3A44Z&ske=2025-12-07T01%3A22%3A44Z&sks=b&skv=2024-08-04&sig=R7RgmDv5bCQwEbrk/o/OWWzdB3gmAeboYERR/PflB2w%3D&ac=oaivgprodscus2',
      textColor: 'text-pink-400',
      hoverShadow: 'hover:shadow-[0_10px_50px_-10px_rgba(236,72,153,0.6)]',
      hoverBorder: 'hover:border-pink-400',
      titleHover: 'group-hover:text-pink-100'
    },
    { 
      name: 'Smart Home', 
      icon: <HomeIcon size={24} />, 
      count: '45 Devices',
      image: 'https://videos.openai.com/az/vg-assets/task_01kbb95akzf4wtaak70wpxqp2n%2F1764536568_img_0.webp?se=2025-12-02T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-30T01%3A17%3A44Z&ske=2025-12-07T01%3A22%3A44Z&sks=b&skv=2024-08-04&sig=RmeIDtbWfOuVuREn4oLRkVpe%2B5xBjFZCL7%2BTRvr0o3M%3D&ac=oaivgprodscus2',
      textColor: 'text-emerald-400',
      hoverShadow: 'hover:shadow-[0_10px_50px_-10px_rgba(16,185,129,0.6)]',
      hoverBorder: 'hover:border-emerald-400',
      titleHover: 'group-hover:text-emerald-100'
    },
    { 
      name: 'Gaming', 
      icon: <Gamepad2 size={24} />, 
      count: '15 Consoles',
      image: 'https://videos.openai.com/az/vg-assets/task_01kbb98tdrfxsbd89fgktsn75f%2F1764536679_img_0.webp?se=2025-12-02T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-30T01%3A17%3A44Z&ske=2025-12-07T01%3A22%3A44Z&sks=b&skv=2024-08-04&sig=2XQhVJe1jaeJ4tLMDe3SBS15ZhNWOX1Vw8RHmTOUSts%3D&ac=oaivgprodscus2',
      textColor: 'text-violet-400',
      hoverShadow: 'hover:shadow-[0_10px_50px_-10px_rgba(139,92,246,0.6)]',
      hoverBorder: 'hover:border-violet-400',
      titleHover: 'group-hover:text-violet-100'
    }
  ];

  const brands = ['Apple', 'Samsung', 'Sony', 'Bose', 'Google', 'OnePlus', 'Xiaomi', 'Realme'];
  const budgets = [
    { label: 'Under ₹2,000', price: '2000' },
    { label: 'Under ₹10,000', price: '10000' },
    { label: 'Under ₹30,000', price: '30000' },
    { label: 'Premium', price: 'premium' },
  ];

  const blogs = [
    { title: 'The Future of AI Wearables', desc: 'How neural chips are changing fitness tracking forever.', date: 'Oct 12, 2023', image: 'https://www.xevensolutions.com/wp-content/uploads/2024/04/What-is-wearable-AI-technology.jpg' },
    { title: 'Smart Home Ecosystems', desc: 'Building a fully automated home with Matter support.', date: 'Sep 28, 2023', image: 'https://qz.com/cdn-cgi/image/width=1920,quality=85,format=auto/https://assets.qz.com/media/9abc1f7af260dc63d3d6d441e5d0901b.jpg' },
    { title: 'Gaming at 240Hz', desc: 'Why refresh rates matter more than resolution.', date: 'Sep 15, 2023', image: 'https://cdn.mos.cms.futurecdn.net/opLnPChLqDUWxaTYAhNgbA.jpg' }
  ];

  return (
    <div className="overflow-hidden">
      {/* 1. Hero Banner */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Pastel Blobs - Optimized */}
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-pastel-blue/30 rounded-full blur-[120px] animate-float transform-gpu will-change-transform"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-pastel-purple/30 rounded-full blur-[120px] animate-float transform-gpu will-change-transform" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl animate-fade-in-up order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 border border-blue-200 rounded-full bg-white/60 backdrop-blur-md mb-8 shadow-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-slate-600 text-xs font-bold uppercase tracking-[0.2em] font-tech">Next Gen Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-slate-800 leading-[1.1] mb-6 tracking-tight">
              THE FUTURE IS <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse-soft">NOW HERE</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed border-l-4 border-pastel-blue pl-6">
              Experience the pinnacle of innovation. Smartify brings you AI-integrated electronics that seamlessly adapt to your lifestyle.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/category/Smartphones" className="group relative px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl overflow-hidden transition-all hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-1 flex items-center gap-2">
                Shop Collection <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="px-8 py-4 bg-white/50 text-slate-700 font-bold rounded-2xl border border-white/60 hover:bg-white hover:shadow-lg transition-all flex items-center gap-2 backdrop-blur-sm">
                <Play size={18} fill="currentColor" className="opacity-50" /> Watch Video
              </Link>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 animate-float">
            <div className="relative z-10 w-full aspect-square glass-panel p-8 flex items-center justify-center shadow-2xl shadow-purple-200/50 border-white/80">
               {/* Abstract Image placeholder */}
               <div className="relative w-full h-full rounded-[2rem] overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue to-pastel-purple rounded-[2rem] opacity-40 blur-xl animate-pulse-soft"></div>
                  <img src="https://videos.openai.com/az/vg-assets/task_01kbb1v9aqet1917nm8pkmpdzc%2F1764528948_img_0.webp?se=2025-12-02T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-30T01%3A09%3A01Z&ske=2025-12-07T01%3A14%3A01Z&sks=b&skv=2024-08-04&sig=zKJmvbvtqaI21ItCuZESSZNqiOyHZyWoawnN9E1Wueg%3D&ac=oaivgprodscus2" alt="Future Tech" className="absolute inset-0 w-full h-full object-cover rounded-[2rem] transition-transform duration-700 group-hover:scale-105" />
                  
                  {/* Floating Cards */}
                  <div className="absolute -right-6 top-12 glass-card p-4 animate-float flex items-center gap-3 shadow-lg" style={{animationDelay: '1s'}}>
                    <div className="w-10 h-10 rounded-full bg-pastel-green/40 flex items-center justify-center text-green-800"><Cpu size={20} /></div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-bold">Processor</p>
                      <p className="text-sm font-bold text-slate-800 font-tech">AI Neural V9</p>
                    </div>
                  </div>

                  <div className="absolute -left-6 bottom-16 glass-card p-4 animate-float flex items-center gap-3 shadow-lg" style={{animationDelay: '2s'}}>
                    <div className="w-10 h-10 rounded-full bg-pastel-blue/40 flex items-center justify-center text-blue-800"><Zap size={20} /></div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-bold">Battery Life</p>
                      <p className="text-sm font-bold text-slate-800 font-tech">72 Hours +</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Marquee */}
      <section className="py-8 bg-white/40 border-y border-white/50 backdrop-blur-sm overflow-hidden">
         <div className="container mx-auto px-4 mb-4 text-center">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">Trusted by Global Tech Giants</p>
         </div>
         <div className="flex gap-12 animate-float items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {brands.map((brand, idx) => (
               <span key={idx} className="text-2xl md:text-3xl font-tech font-bold text-slate-300 hover:text-slate-800 cursor-default transition-colors select-none">
                 {brand}
               </span>
            ))}
            {/* Duplicate for illusion of width if needed, or simple static list for now */}
            {brands.slice(0, 4).map((brand, idx) => (
               <span key={`dup-${idx}`} className="text-2xl md:text-3xl font-tech font-bold text-slate-300 hover:text-slate-800 cursor-default transition-colors select-none hidden md:inline">
                 {brand}
               </span>
            ))}
         </div>
      </section>

      {/* 3. Deal of the Day */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="glass-panel p-8 md:p-12 bg-gradient-to-r from-blue-50 to-purple-50 shadow-xl shadow-blue-100 border-blue-200">
               <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
                  <div>
                    <div className="flex items-center gap-2 text-red-500 font-bold uppercase tracking-widest text-xs mb-2">
                       <Timer className="animate-pulse"/> Limited Time Offer
                    </div>
                    <h2 className="text-3xl md:text-4xl font-tech font-bold text-slate-800">DEAL OF THE <span className="text-blue-600">DAY</span></h2>
                    <p className="text-slate-500 mt-2">Grab these premium gadgets before the timer runs out.</p>
                  </div>
                  <div className="flex gap-2 text-center">
                     {['04', '12', '45'].map((time, i) => (
                       <div key={i} className="glass-card w-16 h-16 flex flex-col items-center justify-center border-slate-200">
                          <span className="text-xl font-bold text-slate-900 font-tech">{time}</span>
                          <span className="text-['10px'] text-slate-400 uppercase">{['Hrs', 'Min', 'Sec'][i]}</span>
                       </div>
                     ))}
                  </div>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                 {exclusive.slice(0, 5).map((product) => (
                    <ProductCard key={product.id} product={product} />
                 ))}
               </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 4. Shop By Budget */}
      <section className="py-10">
        <div className="container mx-auto px-4">
           <RevealOnScroll className="mb-8">
              <h2 className="text-2xl font-tech font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Tag size={24} className="text-green-500"/> SHOP BY BUDGET
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {budgets.map((b, i) => (
                   <Link key={i} to={`/search?q=${b.price}`} className="glass-card p-6 flex items-center justify-center text-center group hover:bg-green-50/50 transition-colors">
                      <div>
                         <p className="text-lg font-bold text-slate-800 group-hover:text-green-600 transition-colors">{b.label}</p>
                         <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider group-hover:text-green-500">Browse Store</p>
                      </div>
                   </Link>
                 ))}
              </div>
           </RevealOnScroll>
        </div>
      </section>

      {/* 5. Featured Categories Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <RevealOnScroll>
            <div className="glass-panel p-8 md:p-12 bg-white/40 border-white/60 shadow-2xl relative overflow-hidden">
               {/* Decorative background blob */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl pointer-events-none"></div>

               <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6 relative z-10">
                 <div>
                   <div className="flex items-center gap-2 text-slate-500 font-bold uppercase tracking-[0.2em] text-xs mb-3">
                     <Layers size={14} className="text-blue-500"/> Curated Collections
                   </div>
                   <h2 className="text-4xl md:text-5xl font-tech font-bold text-slate-800">
                     BROWSE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">CATEGORIES</span>
                   </h2>
                 </div>
                 <p className="text-slate-500 max-w-sm text-sm md:text-right leading-relaxed border-l-2 border-slate-200 pl-4">
                   Explore our meticulously organized catalog of premium electronics. Designed for speed, built for the future.
                 </p>
               </div>
               
               {/* Single Row 5-Column Grid with Neon Shadows */}
               <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 relative z-10">
                  {categories.map((cat, idx) => (
                     <RevealOnScroll key={cat.name} delay={idx * 100} className="w-full">
                       <Link 
                         to={`/category/${cat.name}`} 
                         className={`group relative block w-full aspect-square rounded-[2rem] overflow-hidden border border-white/20 shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] ${cat.hoverShadow} ${cat.hoverBorder}`}
                       >
                          
                          {/* Background Image */}
                          <div className="absolute inset-0">
                            <img 
                               src={cat.image} 
                               alt={cat.name} 
                               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                            {/* Premium Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                          </div>

                          {/* Content Overlay */}
                          <div className="absolute inset-0 p-6 flex flex-col justify-end items-center text-center">
                             <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                {React.cloneElement(cat.icon as React.ReactElement<any>, { size: 16 })}
                             </div>

                             <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className={`text-lg md:text-xl font-tech font-bold text-white tracking-wide mb-1 transition-colors ${cat.titleHover}`}>
                                  {cat.name}
                                </h3>
                                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 block">
                                  {cat.count}
                                </span>
                             </div>
                          </div>
                       </Link>
                     </RevealOnScroll>
                  ))}
               </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 6. New Arrivals */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <RevealOnScroll className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
               <div className="flex items-center gap-2 text-purple-500 font-bold uppercase tracking-widest text-xs mb-2">
                 <TrendingUp size={16}/> Just Launched
               </div>
               <h2 className="text-3xl font-tech font-bold text-slate-800 mb-2">
                 NEW ARRIVALS
               </h2>
            </div>
            <Link to="/search?q=new" className="px-6 py-2 border border-slate-300 text-slate-600 hover:bg-slate-900 hover:text-white font-bold rounded-xl uppercase text-xs tracking-widest transition-all shadow-sm">View All</Link>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product, idx) => (
              <RevealOnScroll key={product.id} delay={idx * 100}>
                <ProductCard product={product} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Exclusive Collections */}
      <section className="py-16">
         <div className="container mx-auto px-4">
            <RevealOnScroll>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <Link to="/category/Gaming" className="group relative h-80 rounded-[2rem] overflow-hidden shadow-xl shadow-purple-100">
                    <img src="https://videos.openai.com/az/vg-assets/task_01kbb3w2mhfgc97retbyr0r1se%2F1764531071_img_0.webp?se=2025-12-02T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-30T01%3A09%3A01Z&ske=2025-12-07T01%3A14%3A01Z&sks=b&skv=2024-08-04&sig=SjchT3XCx1cwUUF1PODfXZZpdoewyMGtUFwBHBtDct0%3D&ac=oaivgprodscus2" alt="Gaming" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-10">
                       <span className="px-3 py-1 bg-purple-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 inline-block">Pro Gear</span>
                       <h3 className="text-3xl font-tech font-bold text-white mb-2">ULTIMATE GAMING</h3>
                       <p className="text-slate-300 text-sm mb-4 max-w-xs">Level up with high-refresh monitors, mechanical keyboards, and more.</p>
                       <span className="text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">Shop Now <ArrowRight size={16}/></span>
                    </div>
                 </Link>
                 
                 <Link to="/category/Smart Home" className="group relative h-80 rounded-[2rem] overflow-hidden shadow-xl shadow-blue-100">
                    <img src="https://videos.openai.com/az/vg-assets/task_01kbb3yntzecxvpmx0fq00b6qy%2F1764531171_img_0.webp?se=2025-12-02T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-30T01%3A17%3A44Z&ske=2025-12-07T01%3A22%3A44Z&sks=b&skv=2024-08-04&sig=eHxkZKdGFR47l1bn01q0SmijSARWXN2qxPcKQaFdprI%3D&ac=oaivgprodscus2" alt="Smart Home" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-10">
                       <span className="px-3 py-1 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 inline-block">Automation</span>
                       <h3 className="text-3xl font-tech font-bold text-white mb-2">SMART LIVING</h3>
                       <p className="text-slate-300 text-sm mb-4 max-w-xs">Transform your home with intelligent lighting, security, and assistants.</p>
                       <span className="text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">Shop Now <ArrowRight size={16}/></span>
                    </div>
                 </Link>
              </div>
            </RevealOnScroll>
         </div>
      </section>

      {/* 8. Why Choose Us */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="glass-panel p-12 relative overflow-hidden shadow-xl shadow-purple-500/5">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-pastel-yellow/40 rounded-full blur-[60px] transform-gpu"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pastel-blue/40 rounded-full blur-[60px] transform-gpu"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                  <h2 className="text-3xl font-tech font-bold text-slate-800 mb-8">WHY CHOOSE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">SMARTIFY?</span></h2>
                  <div className="space-y-8">
                    <div className="flex gap-4 group">
                      <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-green-600 shrink-0 border border-green-100 group-hover:scale-110 transition-transform"><Cpu size={28} /></div>
                      <div>
                        <h4 className="text-slate-800 font-bold text-lg mb-1">Cutting-Edge AI Integration</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">All our devices come with built-in neural processing units for adaptive performance and smarter living.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 group">
                      <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-purple-600 shrink-0 border border-purple-100 group-hover:scale-110 transition-transform"><Zap size={28} /></div>
                      <div>
                        <h4 className="text-slate-800 font-bold text-lg mb-1">Sustainable Power Tech</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">Eco-friendly materials and next-gen battery technology that lasts longer and charges faster.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 group">
                      <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 shrink-0 border border-blue-100 group-hover:scale-110 transition-transform"><Truck size={28} /></div>
                      <div>
                        <h4 className="text-slate-800 font-bold text-lg mb-1">Hyper-Fast Logistics</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">Same-day delivery in metro cities with real-time AI tracking.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 lg:h-96 glass-card p-2 overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800" alt="Technology" className="w-full h-full object-cover rounded-2xl" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 pointer-events-none group hover:bg-black/0 transition-colors">
                     <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white animate-pulse group-hover:scale-110 transition-transform">
                       <Play className="w-8 h-8 text-white ml-1 fill-current" />
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 9. Smart Blog */}
      <section className="py-20 bg-white/40">
        <div className="container mx-auto px-4">
          <RevealOnScroll className="text-center mb-12">
             <h2 className="text-3xl font-tech font-bold text-slate-800 mb-4">SMARTIFY <span className="text-blue-500">STORIES</span></h2>
             <p className="text-slate-500">Latest news from the world of AI and consumer electronics.</p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {blogs.map((blog, i) => (
                <RevealOnScroll key={i} delay={i * 100}>
                   <div className="glass-card overflow-hidden h-full group cursor-pointer">
                      <div className="h-48 overflow-hidden relative">
                         <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                         <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">{blog.date}</div>
                      </div>
                      <div className="p-6">
                         <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{blog.title}</h3>
                         <p className="text-slate-500 text-sm mb-4 line-clamp-2">{blog.desc}</p>
                         <span className="text-blue-500 text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">Read Article <ArrowRight size={12}/></span>
                      </div>
                   </div>
                </RevealOnScroll>
             ))}
          </div>
        </div>
      </section>

      {/* 10. Testimonials */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
           <RevealOnScroll className="mb-12">
              <h2 className="text-3xl font-tech font-bold text-slate-800 text-center">CUSTOMER <span className="text-purple-500">VOICES</span></h2>
           </RevealOnScroll>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((_, i) => (
                <RevealOnScroll key={i} delay={i * 100}>
                   <div className="glass-panel p-8 relative">
                      <div className="text-4xl text-blue-200 absolute top-4 left-4 font-serif">"</div>
                      <div className="flex items-center gap-1 text-yellow-500 mb-4">
                         {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor"/>)}
                      </div>
                      <p className="text-slate-600 mb-6 italic text-sm leading-relaxed">
                         "Absolutely blown away by the quality and the AI features. The delivery was instant and the packaging was eco-friendly. Smartify is my go-to for tech!"
                      </p>
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 bg-slate-200 rounded-full bg-[url('https://i.pravatar.cc/150?img=12')] bg-cover"></div>
                         <div>
                            <p className="text-sm font-bold text-slate-800">Sarah Jenkins</p>
                            <p className="text-xs text-slate-400">Verified Buyer</p>
                         </div>
                      </div>
                   </div>
                </RevealOnScroll>
              ))}
           </div>
        </div>
      </section>

      {/* 11. Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="max-w-5xl mx-auto bg-gradient-to-r from-pastel-blue via-pastel-purple to-pastel-pink rounded-[2.5rem] p-1 shadow-2xl shadow-purple-200/50">
              <div className="bg-white/90 rounded-[2.4rem] p-10 md:p-16 text-center relative overflow-hidden backdrop-blur-xl">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-pastel-peach rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm animate-pulse-soft">
                    <Mail className="w-8 h-8 text-orange-700" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-tech font-bold text-slate-800 mb-4">JOIN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">REVOLUTION</span></h2>
                  <p className="text-slate-500 mb-8 max-w-lg mx-auto text-lg">Subscribe for exclusive drops, AI tech tips, and member-only discounts sent directly to your inbox.</p>
                  
                  <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                    <input type="email" placeholder="Enter your email address" className="flex-1 glass-input text-slate-800 px-6 py-4 rounded-xl focus:outline-none transition-all shadow-inner placeholder-slate-400 border border-slate-200" />
                    <button type="submit" className="bg-slate-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-slate-800 hover:shadow-lg transition-all transform hover:-translate-y-1">SUBSCRIBE</button>
                  </form>
                  <p className="text-[10px] text-slate-400 mt-4 uppercase tracking-widest">No spam, only tech.</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Home;
