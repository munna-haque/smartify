import React from 'react';
import { useUser } from '../context/UserContext';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag, Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Wishlist: React.FC = () => {
  const { wishlist, removeFromWishlist } = useUser();
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-slate-800 mb-8 font-tech flex items-center gap-3">
           <Heart className="text-pink-500 fill-current" /> MY WISHLIST 
           <span className="text-lg text-slate-400 font-normal">({wishlist.length})</span>
        </h1>

        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {wishlist.map(product => (
                <div key={product.id} className="relative group">
                   <ProductCard product={product} />
                   <button 
                      onClick={() => removeFromWishlist(product.id)}
                      className="absolute top-2 right-2 bg-white/80 p-2 rounded-full text-slate-400 hover:text-red-500 z-20 shadow-sm"
                      title="Remove from Wishlist"
                   >
                      <Trash2 size={16} />
                   </button>
                </div>
             ))}
          </div>
        ) : (
          <div className="text-center py-20 glass-panel">
            <Heart size={48} className="mx-auto text-slate-200 mb-4"/>
            <h2 className="text-xl font-bold text-slate-600">Your wishlist is empty</h2>
            <p className="text-slate-400">Save items you want to buy later.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;