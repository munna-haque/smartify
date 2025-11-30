
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ShoppingBag, Star, Zap, Plus, Cpu, Maximize2 } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

const { Link } = ReactRouterDOM;

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  // Extract specs for info grid
  const specEntries = Object.entries(product.specs || {});
  const spec1 = specEntries[0];
  const spec2 = specEntries[1];

  return (
    <div className="group relative w-full bg-white p-3 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 flex flex-col h-full hover:animate-neon-pulse">
      
      {/* Inner Square Image Container - Clean & Unobstructed */}
      <Link to={`/product/${product.id}`} className="block relative w-full aspect-square rounded-[2rem] overflow-hidden bg-slate-100 group-hover:shadow-inner transition-all duration-500 isolate">
        
        {/* Product Image - Full Bleed / Cover */}
        <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110"
        />

        {/* Subtle Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </Link>

      {/* Content Below Frame */}
      <div className="px-2 pt-4 pb-2 flex flex-col flex-grow">
        {/* Header: Brand & Rating */}
        <div className="flex justify-between items-start mb-2">
           <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">{product.brand}</span>
           <div className="flex items-center gap-1 bg-slate-100 px-1.5 py-0.5 rounded text-[10px] font-bold text-slate-600">
             <Star size={8} fill="currentColor" className="text-yellow-500"/> {product.rating}
           </div>
        </div>

        {/* Title */}
        <Link to={`/product/${product.id}`} className="group-hover:text-blue-600 transition-colors mb-3 block">
          <h3 className="text-base font-bold text-slate-800 leading-tight line-clamp-1">{product.name}</h3>
        </Link>
        
        {/* Specs Grid - Moved from Image */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {spec1 && (
            <div className="flex items-center gap-2 bg-blue-50/50 p-2 rounded-xl border border-blue-100/50">
               <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                  <Cpu size={12} />
               </div>
               <div className="flex flex-col leading-none overflow-hidden">
                  <span className="text-[8px] text-slate-400 font-bold uppercase truncate">{spec1[0]}</span>
                  <span className="text-[10px] text-slate-800 font-bold font-tech truncate">{spec1[1]}</span>
               </div>
            </div>
          )}
          {spec2 && (
            <div className="flex items-center gap-2 bg-purple-50/50 p-2 rounded-xl border border-purple-100/50">
               <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-purple-600 shrink-0 shadow-sm">
                  <Zap size={12} fill="currentColor" />
               </div>
               <div className="flex flex-col leading-none overflow-hidden">
                  <span className="text-[8px] text-slate-400 font-bold uppercase truncate">{spec2[0]}</span>
                  <span className="text-[10px] text-slate-800 font-bold font-tech truncate">{spec2[1]}</span>
               </div>
            </div>
          )}
        </div>
        
        {/* Footer: Price & Actions */}
        <div className="mt-auto pt-3 flex items-center justify-between border-t border-slate-100/50">
           <div className="flex flex-col">
             {product.originalPrice && (
               <span className="text-[10px] text-slate-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
             )}
             <span className="text-lg font-bold font-tech text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
               ₹{product.price.toLocaleString('en-IN')}
             </span>
           </div>
           
           <div className="flex gap-2">
              {/* View Button */}
              <Link 
                to={`/product/${product.id}`}
                className="w-10 h-10 rounded-xl bg-slate-50 text-slate-500 hover:text-blue-600 hover:bg-blue-50 flex items-center justify-center transition-colors"
                title="View Details"
              >
                <Maximize2 size={16} />
              </Link>
              
              {/* Add Button */}
              <button 
                onClick={handleAddToCart}
                className="w-10 h-10 rounded-xl bg-slate-900 text-white shadow-lg hover:bg-blue-600 hover:shadow-blue-200 flex items-center justify-center transition-all duration-300 transform active:scale-95"
                title="Add to Cart"
              >
                <Plus size={18}/>
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
