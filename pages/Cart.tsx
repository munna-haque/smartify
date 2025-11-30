import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowLeft, CreditCard, ShoppingBag, Zap } from 'lucide-react';
import { useCart } from '../context/CartContext';

const { Link, useNavigate } = ReactRouterDOM;

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalAmount } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
        <div className="glass-panel p-12 text-center max-w-md w-full shadow-2xl shadow-blue-50">
          <div className="w-24 h-24 bg-pastel-blue/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={32} className="text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-4 font-tech">CART EMPTY</h2>
          <p className="text-slate-500 mb-8">Your neural interface is ready for new upgrades.</p>
          <Link to="/" className="inline-block bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg">
            Initialize Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-tech font-bold text-slate-800 mb-8">SYSTEM <span className="text-blue-500">CART</span></h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="glass-panel p-4 flex flex-col sm:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-24 h-24 bg-white/40 rounded-2xl overflow-hidden shrink-0 border border-white/50 p-2">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-2">
                    <h3 className="font-bold text-slate-800 text-lg line-clamp-1">{item.name}</h3>
                  </div>
                  <p className="text-sm text-blue-600 font-medium mb-4 font-tech">₹{item.price.toLocaleString('en-IN')}</p>
                  
                  <div className="flex items-center justify-center sm:justify-start gap-4">
                    <div className="flex items-center glass-input rounded-xl h-10 shadow-inner">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                        className="px-3 text-slate-400 hover:text-slate-800 disabled:opacity-50 transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center text-sm text-slate-800 font-bold">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                        className="px-3 text-slate-400 hover:text-slate-800 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-slate-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-lg">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                
                <div className="text-right font-bold text-slate-900 text-xl font-tech px-4">
                  ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                </div>
              </div>
            ))}
            
            <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mt-4 font-medium transition-colors">
              <ArrowLeft size={16} /> Continue Browsing
            </Link>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="glass-panel p-8 sticky top-24 shadow-xl shadow-purple-50">
              <h3 className="text-xl font-bold text-slate-800 mb-6 font-heading">Order Summary</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-slate-500">
                  <span>Subtotal</span>
                  <span className="text-slate-800 font-medium">₹{totalAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium flex items-center gap-1"><Zap size={12}/> Express Free</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Tax (Estimated)</span>
                  <span className="text-slate-800 font-medium">₹{(totalAmount * 0.08).toLocaleString('en-IN')}</span>
                </div>
              </div>
              
              <div className="border-t border-slate-200/50 pt-6 mb-8">
                <div className="flex justify-between text-xl font-bold text-slate-900">
                  <span>Total</span>
                  <span className="text-blue-600 font-tech">₹{(totalAmount * 1.08).toLocaleString('en-IN')}</span>
                </div>
              </div>
              
              <button 
                onClick={() => navigate('/checkout')}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Proceed to Checkout <CreditCard size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;