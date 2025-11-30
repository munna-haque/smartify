import React, { useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle, ShieldCheck, Lock } from 'lucide-react';

const { useNavigate } = ReactRouterDOM;

const Checkout: React.FC = () => {
  const { cart, totalAmount, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    payment: 'card'
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock processing
    setTimeout(() => {
      setIsSuccess(true);
      clearCart();
    }, 1500);
  };

  if (cart.length === 0 && !isSuccess) {
    navigate('/cart');
    return null;
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="glass-panel border-green-200/50 p-12 max-w-md w-full text-center shadow-2xl shadow-green-50 animate-fade-in-up">
          <div className="w-24 h-24 bg-pastel-green/40 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-100">
            <CheckCircle className="w-12 h-12 text-green-700" />
          </div>
          <h2 className="text-3xl font-tech font-bold text-slate-800 mb-2">ORDER CONFIRMED</h2>
          <p className="text-slate-500 mb-8">Mission Accomplished. Order #{Math.floor(Math.random() * 10000)} is being processed by our automated systems.</p>
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-200 uppercase tracking-wider"
          >
            Return to Base
          </button>
        </div>
      </div>
    );
  }

  const tax = totalAmount * 0.08;
  const total = totalAmount + tax;

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-tech font-bold text-slate-800 mb-10 text-center uppercase tracking-widest">Secure Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div className="glass-panel p-8 shadow-xl">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2"><Lock size={18} className="text-blue-500"/> Encrypted Shipping Details</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-slate-500 mb-2 uppercase tracking-wider">Full Name</label>
                  <input required name="name" onChange={handleInputChange} type="text" className="w-full glass-input rounded-xl p-3 text-slate-800 focus:outline-none transition-all shadow-sm" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-2 uppercase tracking-wider">Phone</label>
                  <input required name="phone" onChange={handleInputChange} type="tel" className="w-full glass-input rounded-xl p-3 text-slate-800 focus:outline-none transition-all shadow-sm" placeholder="+1 234 567 890" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs text-slate-500 mb-2 uppercase tracking-wider">Email Address</label>
                <input required name="email" onChange={handleInputChange} type="email" className="w-full glass-input rounded-xl p-3 text-slate-800 focus:outline-none transition-all shadow-sm" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-xs text-slate-500 mb-2 uppercase tracking-wider">Shipping Address</label>
                <input required name="address" onChange={handleInputChange} type="text" className="w-full glass-input rounded-xl p-3 text-slate-800 focus:outline-none transition-all shadow-sm" placeholder="123 Tech Street" />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-slate-500 mb-2 uppercase tracking-wider">City</label>
                  <input required name="city" onChange={handleInputChange} type="text" className="w-full glass-input rounded-xl p-3 text-slate-800 focus:outline-none transition-all shadow-sm" placeholder="New York" />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-2 uppercase tracking-wider">Zip Code</label>
                  <input required name="zip" onChange={handleInputChange} type="text" className="w-full glass-input rounded-xl p-3 text-slate-800 focus:outline-none transition-all shadow-sm" placeholder="10001" />
                </div>
              </div>

              <div className="pt-8 border-t border-slate-200/50 mt-4">
                <h2 className="text-xl font-bold text-slate-800 mb-6">Payment Method</h2>
                <div className="space-y-4">
                  <label className="flex items-center gap-4 p-4 glass-input rounded-xl cursor-pointer hover:border-blue-400 hover:shadow-md transition-all group">
                    <input type="radio" name="payment" value="card" defaultChecked onChange={handleInputChange} className="accent-blue-500 w-5 h-5" />
                    <span className="text-slate-600 group-hover:text-slate-900">Credit / Debit Card</span>
                  </label>
                  <label className="flex items-center gap-4 p-4 glass-input rounded-xl cursor-pointer hover:border-blue-400 hover:shadow-md transition-all group">
                    <input type="radio" name="payment" value="upi" onChange={handleInputChange} className="accent-blue-500 w-5 h-5" />
                    <span className="text-slate-600 group-hover:text-slate-900">Crypto / Digital Wallet</span>
                  </label>
                </div>
              </div>

              <button type="submit" className="w-full mt-8 bg-slate-900 hover:bg-slate-800 text-white font-bold py-5 rounded-xl transition-all shadow-lg uppercase tracking-wider text-sm flex items-center justify-center gap-2">
                 <ShieldCheck size={18} /> Pay ₹{total.toLocaleString('en-IN')}
              </button>
            </form>
          </div>

          {/* Summary */}
          <div>
            <div className="glass-panel p-8 sticky top-24">
              <h2 className="text-xl font-bold text-slate-800 mb-6 font-heading">Order Summary</h2>
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2 mb-6 custom-scrollbar">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4 items-center bg-white/40 p-3 rounded-xl border border-white/60 shadow-sm">
                    <div className="w-14 h-14 bg-white/50 rounded-lg overflow-hidden shrink-0 border border-white/50 p-1">
                       <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-slate-800 text-sm font-semibold line-clamp-1">{item.name}</h4>
                      <p className="text-xs text-slate-500">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-slate-900 font-tech font-bold text-sm">₹{(item.price * item.quantity).toLocaleString('en-IN')}</div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 border-t border-slate-200/50 pt-6">
                 <div className="flex justify-between text-slate-500 text-sm">
                  <span>Subtotal</span>
                  <span className="text-slate-800">₹{totalAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-500 text-sm">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Standard (Free)</span>
                </div>
                <div className="flex justify-between text-slate-500 text-sm">
                  <span>Tax (8%)</span>
                  <span className="text-slate-800">₹{tax.toLocaleString('en-IN')}</span>
                </div>
              </div>
              
               <div className="flex justify-between text-2xl font-bold text-slate-900 border-t border-slate-200/50 pt-6 mt-6 font-tech">
                  <span>Total</span>
                  <span className="text-blue-600">₹{total.toLocaleString('en-IN')}</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;