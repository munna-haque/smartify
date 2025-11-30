import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Minus, Plus, ShoppingBag, Truck, Shield, Cpu, Battery, Wifi, Cuboid } from 'lucide-react';
import { getProductById, getProductsByCategory } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import Product3DViewer from '../components/Product3DViewer';

const { useParams, Link } = ReactRouterDOM;

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'features' | 'specs'>('features');

  // Related products
  const relatedProducts = product 
    ? getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 4)
    : [];

  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
  }, [id]);

  if (!product) {
    return <div className="text-center py-20 text-slate-800 min-h-screen">Product not found</div>;
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-xs text-slate-400 mb-8 uppercase tracking-widest font-bold">
          <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link> <span className="text-purple-300">/</span> 
          <Link to={`/category/${product.category}`} className="hover:text-blue-500 mx-2 transition-colors">{product.category}</Link> <span className="text-purple-300">/</span> 
          <span className="text-slate-600 mx-2">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Product Image Gallery / 3D Viewer */}
          <div className="space-y-6">
            <div className="aspect-square glass-panel p-2 relative group flex items-center justify-center">
               <div className="absolute inset-0 bg-pastel-blue/20 blur-[80px] opacity-40 rounded-full m-10 pointer-events-none"></div>
               <div className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-600 flex items-center gap-1 shadow-sm border border-white">
                 <Cuboid size={14} className="text-blue-500"/> 3D View
               </div>
               {/* 3D Viewer Component - nested inside glass panel */}
               <div className="w-full h-full rounded-2xl overflow-hidden bg-white/30">
                  <Product3DViewer imageUrl={product.image} />
               </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`aspect-square glass-card p-2 cursor-pointer transition-all ${i === 0 ? 'border-blue-300 ring-2 ring-blue-100' : 'hover:border-blue-200'}`}>
                  <img src={product.image} alt="thumbnail" className="w-full h-full object-cover rounded-xl" />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="inline-block px-3 py-1 bg-pastel-purple/30 border border-purple-200 text-purple-700 text-[10px] font-bold uppercase rounded-lg mb-6 tracking-widest font-tech">
              {product.category} Series
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-800 mb-6 leading-tight">{product.name}</h1>
            
            <div className="flex items-center gap-6 mb-8 border-b border-slate-200/50 pb-8">
              <span className="text-4xl font-bold text-slate-900 font-tech">₹{product.price.toLocaleString('en-IN')}</span>
              <div className="flex items-center gap-1 text-yellow-600 text-xs font-bold bg-pastel-yellow/50 px-3 py-1.5 rounded-full border border-yellow-200">
                <span>★ {product.rating}</span>
                <span className="text-slate-500 ml-1 border-l border-yellow-300 pl-2">120 Verified Reviews</span>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-8 text-lg font-light">
              {product.description}
            </p>

            {/* Tech Highlights */}
            <div className="grid grid-cols-3 gap-4 mb-8">
               <div className="glass-card p-4 text-center hover:shadow-md transition-all">
                  <Cpu className="mx-auto text-blue-500 mb-2" size={20} />
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Processor</p>
                  <p className="text-sm font-bold text-slate-800">Neural X</p>
               </div>
               <div className="glass-card p-4 text-center hover:shadow-md transition-all">
                  <Battery className="mx-auto text-green-500 mb-2" size={20} />
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Battery</p>
                  <p className="text-sm font-bold text-slate-800">48 Hrs</p>
               </div>
               <div className="glass-card p-4 text-center hover:shadow-md transition-all">
                  <Wifi className="mx-auto text-purple-500 mb-2" size={20} />
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Connect</p>
                  <p className="text-sm font-bold text-slate-800">5G / WiFi 7</p>
               </div>
            </div>

            {/* Actions */}
            <div className="glass-panel p-6 mb-10 shadow-lg shadow-purple-50">
              <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
                <div className="flex items-center glass-input rounded-xl shadow-inner">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-4 text-slate-400 hover:text-slate-800 transition-colors"><Minus size={16} /></button>
                  <span className="w-12 text-center text-slate-800 font-bold font-tech">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-4 text-slate-400 hover:text-slate-800 transition-colors"><Plus size={16} /></button>
                </div>
                <button 
                  onClick={() => addToCart(product, quantity)}
                  className="flex-1 w-full bg-slate-900 text-white hover:bg-slate-800 font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl uppercase tracking-widest text-sm"
                >
                  <ShoppingBag size={18} /> Add to Cart
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-2"><Truck size={14} className="text-green-600" /> Express Delivery Available</div>
                <div className="flex items-center gap-2"><Shield size={14} className="text-purple-600" /> SmartProtect™ Warranty Included</div>
              </div>
            </div>

            {/* Tabs */}
            <div>
              <div className="flex border-b border-slate-200/60 mb-6">
                <button 
                  onClick={() => setActiveTab('features')}
                  className={`pb-4 pr-8 text-xs font-bold uppercase tracking-[0.2em] transition-all relative ${activeTab === 'features' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  Features
                  {activeTab === 'features' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 shadow-sm"></span>}
                </button>
                <button 
                  onClick={() => setActiveTab('specs')}
                  className={`pb-4 px-8 text-xs font-bold uppercase tracking-[0.2em] transition-all relative ${activeTab === 'specs' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  Tech Specs
                  {activeTab === 'specs' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 shadow-sm"></span>}
                </button>
              </div>

              <div className="min-h-[200px]">
                {activeTab === 'features' ? (
                  <ul className="space-y-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 group">
                        <span className="mt-1 w-4 h-4 rounded-full bg-pastel-blue flex items-center justify-center text-blue-800 text-[10px] font-bold">✓</span>
                        <span className="group-hover:text-slate-900 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="glass-card p-4 flex justify-between hover:border-slate-300 transition-colors shadow-sm">
                        <span className="text-slate-500 text-xs uppercase tracking-wider">{key}</span>
                        <span className="text-slate-800 font-tech text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-16 border-t border-slate-200/50">
            <h2 className="text-2xl font-tech font-bold text-slate-800 mb-10">RECOMMENDED <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">UPGRADES</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;