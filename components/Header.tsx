
import React, { useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ShoppingCart, Search, Menu, User, Heart, ChevronDown, Package, LogOut, Wallet, Cpu, Zap, LifeBuoy, Share2, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';
import { MAIN_CATEGORIES } from '../types';

const { Link, useNavigate } = ReactRouterDOM;

const Header: React.FC = () => {
  const { cart } = useCart();
  const { user, isAuthenticated, login, logout } = useUser();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCatDropdown, setActiveCatDropdown] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }).catch(err => {
      console.error('Failed to copy link', err);
    });
  };

  // Helper to get consistent pastel neon colors for categories
  const getCategoryTheme = (index: number) => {
    const themes = [
      { color: 'blue', classes: 'from-blue-50/80 to-blue-50/20 border-blue-200 text-blue-700 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:border-blue-300' },       // Mobiles
      { color: 'purple', classes: 'from-purple-50/80 to-purple-50/20 border-purple-200 text-purple-700 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:border-purple-300' }, // Wearables
      { color: 'pink', classes: 'from-pink-50/80 to-pink-50/20 border-pink-200 text-pink-700 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:border-pink-300' },     // Audio
      { color: 'emerald', classes: 'from-emerald-50/80 to-emerald-50/20 border-emerald-200 text-emerald-700 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:border-emerald-300' }, // Smart Home
      { color: 'amber', classes: 'from-amber-50/80 to-amber-50/20 border-amber-200 text-amber-700 hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:border-amber-300' },   // Computers
      { color: 'indigo', classes: 'from-indigo-50/80 to-indigo-50/20 border-indigo-200 text-indigo-700 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:border-indigo-300' }, // Gaming
    ];
    return themes[index % themes.length];
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-white shadow-sm font-sans transition-all duration-300">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-4 lg:gap-8">
          
          {/* Mobile Menu Trigger */}
          <button className="lg:hidden text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-1" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo with Processor Icon */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl p-1">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-105 transition-transform duration-300">
              <Cpu size={24} className="animate-pulse-soft" />
            </div>
            <div className="flex flex-col items-start">
              <h1 className="text-2xl font-tech font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 tracking-wider leading-none">SMARTIFY</h1>
              <p className="text-[9px] text-slate-400 tracking-[0.2em] font-semibold uppercase hidden sm:block mt-0.5">Make Life Smarter</p>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl hidden md:block relative z-20 ml-4">
            <form onSubmit={handleSearch} className="relative group">
               <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products, brands and more"
                className="w-full glass-input bg-slate-100/50 border-slate-200 rounded-full pl-5 pr-12 py-2.5 focus:bg-white transition-all text-sm shadow-inner focus:shadow-blue-100/50"
               />
               <button type="submit" className="absolute right-1 top-1 h-[calc(100%-8px)] w-10 bg-white rounded-full text-blue-500 hover:text-blue-700 hover:bg-blue-50 flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300">
                 <Search className="w-4 h-4" />
               </button>
            </form>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 lg:gap-6 ml-auto">
            
            {/* Account Dropdown */}
            <div className="relative group hidden lg:block">
              <button className="flex items-center gap-2 text-slate-700 hover:text-blue-600 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg px-2">
                 <div className="bg-pastel-blue/30 p-1.5 rounded-full border border-blue-100"><User size={18} /></div>
                 <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] text-slate-500 font-bold uppercase">Hello, {user ? user.name.split(' ')[0] : 'Sign In'}</span>
                    <span className="text-sm font-bold flex items-center gap-0.5">Account <ChevronDown size={12}/></span>
                 </div>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-60 z-50">
                <div className="glass-panel bg-white p-2 rounded-xl shadow-xl border border-white/50">
                  {!isAuthenticated ? (
                    <div className="p-3 border-b border-slate-100 mb-2">
                       <button onClick={login} className="w-full bg-slate-900 text-white text-sm font-bold py-2 rounded-lg hover:bg-slate-800 mb-2 focus:ring-2 focus:ring-slate-500 focus:outline-none">Sign In</button>
                       <p className="text-[10px] text-slate-400 text-center">New customer? <span className="text-blue-600 cursor-pointer">Start here.</span></p>
                    </div>
                  ) : (
                    <div className="p-3 border-b border-slate-100 mb-2">
                       <p className="text-xs text-slate-500">Wallet Balance</p>
                       <p className="text-sm font-bold text-slate-800">₹{user?.walletBalance}</p>
                    </div>
                  )}

                  <Link to="/account" className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg hover:text-blue-600 focus:bg-slate-50 focus:outline-none"><User size={16}/> My Profile</Link>
                  <Link to="/orders" className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg hover:text-blue-600 focus:bg-slate-50 focus:outline-none"><Package size={16}/> Orders</Link>
                  <Link to="/wishlist" className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg hover:text-blue-600 focus:bg-slate-50 focus:outline-none"><Heart size={16}/> Wishlist</Link>
                  <Link to="/account?tab=wallet" className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg hover:text-blue-600 focus:bg-slate-50 focus:outline-none"><Wallet size={16}/> Rewards</Link>
                  
                  {isAuthenticated && (
                    <button onClick={logout} className="w-full text-left flex items-center gap-3 px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg mt-1 focus:bg-red-50 focus:outline-none"><LogOut size={16}/> Logout</button>
                  )}
                </div>
              </div>
            </div>

            {/* Cart */}
            <Link to="/cart" className="flex items-center gap-2 group relative focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-1">
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-colors" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm border border-white">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="font-bold text-slate-700 hidden lg:block group-hover:text-blue-600">Cart</span>
            </Link>
          </div>
        </div>

        {/* Mobile Search - Visible only on mobile */}
        <div className="md:hidden mt-3">
           <form onSubmit={handleSearch} className="relative">
               <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full glass-input bg-slate-100/50 border-slate-200 rounded-lg pl-4 pr-10 py-2 text-sm"
               />
               <button type="submit" className="absolute right-3 top-2 text-blue-500 focus:outline-none focus:text-blue-700"><Search className="w-4 h-4" /></button>
            </form>
        </div>
      </div>

      {/* Category Navigation Bar - Glowing Buttons */}
      <div className="hidden lg:block pt-2 pb-4">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-between gap-3 text-sm">
            {MAIN_CATEGORIES.map((cat, idx) => {
              const theme = getCategoryTheme(idx);
              return (
                <li 
                  key={cat.name} 
                  className="relative group"
                  onMouseEnter={() => setActiveCatDropdown(cat.name)}
                  onMouseLeave={() => setActiveCatDropdown(null)}
                >
                  <Link to={`/category/${cat.name}`} className={`flex items-center gap-1.5 px-4 py-2 rounded-full border bg-gradient-to-r ${theme.classes} font-bold text-xs uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 focus:scale-105 focus:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-${theme.color}-400`}>
                    {cat.name} <ChevronDown size={10} className={`opacity-60 transition-transform duration-300 ${activeCatDropdown === cat.name ? 'rotate-180' : ''}`} />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {activeCatDropdown === cat.name && (
                    <div className="absolute left-0 top-full pt-2 z-50 animate-fade-in-up w-56">
                      <div className="glass-panel bg-white/90 p-3 rounded-2xl shadow-xl border border-white/60 backdrop-blur-xl">
                         <ul className="space-y-1">
                           {cat.subs.map(sub => (
                             <li key={sub}>
                               <Link to={`/category/${sub}`} className="block px-4 py-2.5 rounded-xl hover:bg-slate-50 text-slate-600 hover:text-blue-600 transition-all text-xs font-medium focus:bg-slate-50 focus:outline-none">
                                 {sub}
                               </Link>
                             </li>
                           ))}
                           <li className="pt-2 mt-2 border-t border-slate-100">
                              <Link to={`/category/${cat.name}`} className="block px-4 py-2 text-[10px] font-bold text-blue-500 uppercase tracking-widest hover:underline focus:outline-none">View All</Link>
                           </li>
                         </ul>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
            
            {/* Special Buttons */}
            <li>
              <Link to="/offers" className="flex items-center gap-2 px-4 py-2 rounded-full border border-rose-200 bg-gradient-to-r from-rose-50/80 to-rose-50/20 text-rose-700 font-bold text-xs uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(244,63,94,0.4)] hover:border-rose-300 focus:scale-105 focus:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400">
                <Zap size={12} className="fill-current" /> Offers Zone
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-200 bg-gradient-to-r from-cyan-50/80 to-cyan-50/20 text-cyan-700 font-bold text-xs uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:border-cyan-300 focus:scale-105 focus:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
                <LifeBuoy size={12} /> Support
              </Link>
            </li>
            {/* Share App Button */}
            <li>
              <button 
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-violet-200 bg-gradient-to-r from-violet-50/80 to-violet-50/20 text-violet-700 font-bold text-xs uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:border-violet-300 focus:scale-105 focus:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                {isCopied ? <Check size={12} /> : <Share2 size={12} />} 
                {isCopied ? 'Copied!' : 'Share App'}
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="bg-white w-4/5 max-w-sm h-full shadow-2xl overflow-y-auto" onClick={e => e.stopPropagation()}>
             {/* Mobile Header */}
             <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-lg flex items-center gap-2"><User size={20}/> {user ? user.name : 'Hello, Sign In'}</h2>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="focus:outline-none focus:bg-white/20 rounded p-1">✕</button>
                </div>
                {!isAuthenticated ? (
                  <button onClick={login} className="bg-white text-blue-600 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider shadow-sm focus:outline-none focus:ring-2 focus:ring-white">Sign In / Join</button>
                ) : (
                  <div className="flex gap-4 text-xs font-medium">
                     <span>Coins: {user?.coins}</span>
                     <span>Wallet: ₹{user?.walletBalance}</span>
                  </div>
                )}
             </div>

             {/* Links */}
             <div className="p-4 space-y-6">
                <div>
                  <h3 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider text-blue-500">Shop By Category</h3>
                  <ul className="space-y-3">
                    {MAIN_CATEGORIES.map(cat => (
                      <li key={cat.name}>
                        <Link to={`/category/${cat.name}`} className="flex justify-between items-center text-slate-600 py-1" onClick={() => setIsMobileMenuOpen(false)}>
                           {cat.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <h3 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider text-purple-500">My Account</h3>
                  <ul className="space-y-3">
                    <li><Link to="/orders" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-slate-600 py-1"><Package size={18}/> My Orders</Link></li>
                    <li><Link to="/wishlist" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-slate-600 py-1"><Heart size={18}/> My Wishlist</Link></li>
                    <li><Link to="/account" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-slate-600 py-1"><User size={18}/> Profile Settings</Link></li>
                  </ul>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <ul className="space-y-3 text-sm text-slate-500">
                    <li><Link to="/contact" className="block py-1">Help Centre</Link></li>
                    <li><Link to="/about" className="block py-1">About Us</Link></li>
                    <li onClick={() => { handleShare(); }} className="text-violet-600 font-bold py-1 cursor-pointer flex items-center gap-2"><Share2 size={16}/> Share App</li>
                    {isAuthenticated && <li onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="text-red-500 font-bold py-1 cursor-pointer">Sign Out</li>}
                  </ul>
                </div>
             </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
