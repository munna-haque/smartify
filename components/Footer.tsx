import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Gift, CreditCard, ShieldCheck, HelpCircle } from 'lucide-react';

const { Link } = ReactRouterDOM;

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/80 border-t border-white pt-16 pb-8 text-slate-500 relative overflow-hidden backdrop-blur-md mt-12">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="text-3xl font-tech font-bold text-slate-800 tracking-wider flex items-center gap-2">
              SMARTIFY <span className="w-2 h-2 bg-pastel-green rounded-full animate-pulse"></span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              India's premium destination for smart electronics. Experience the future with our AI-curated selection of gadgets.
            </p>
            <div className="flex gap-4">
              <div className="p-2 bg-white border border-slate-100 rounded-full hover:bg-pastel-blue hover:text-slate-900 transition-all cursor-pointer shadow-sm"><Facebook size={18} /></div>
              <div className="p-2 bg-white border border-slate-100 rounded-full hover:bg-pastel-blue hover:text-slate-900 transition-all cursor-pointer shadow-sm"><Twitter size={18} /></div>
              <div className="p-2 bg-white border border-slate-100 rounded-full hover:bg-pastel-pink hover:text-slate-900 transition-all cursor-pointer shadow-sm"><Instagram size={18} /></div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-wider">About</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><span className="hover:text-blue-600 cursor-pointer transition-colors">Careers</span></li>
              <li><span className="hover:text-blue-600 cursor-pointer transition-colors">Smartify Stories</span></li>
              <li><span className="hover:text-blue-600 cursor-pointer transition-colors">Press</span></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-wider">Help</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/orders" className="hover:text-blue-600 transition-colors">Payments</Link></li>
              <li><Link to="/orders" className="hover:text-blue-600 transition-colors">Shipping</Link></li>
              <li><Link to="/orders" className="hover:text-blue-600 transition-colors">Cancellation & Returns</Link></li>
              <li><Link to="/orders" className="hover:text-blue-600 transition-colors">FAQ</Link></li>
              <li><span className="hover:text-blue-600 cursor-pointer transition-colors">Report Infringement</span></li>
            </ul>
          </div>

          {/* Consumer Policy */}
          <div>
            <h3 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-wider">Policy</h3>
            <ul className="space-y-3 text-sm">
              <li><span className="hover:text-blue-600 cursor-pointer transition-colors">Return Policy</span></li>
              <li><span className="hover:text-blue-600 cursor-pointer transition-colors">Terms Of Use</span></li>
              <li><span className="hover:text-blue-600 cursor-pointer transition-colors">Security</span></li>
              <li><span className="hover:text-blue-600 cursor-pointer transition-colors">Privacy</span></li>
              <li><span className="hover:text-blue-600 cursor-pointer transition-colors">Sitemap</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 mt-8">
           <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-6">
                 <span className="flex items-center gap-2"><Gift size={14}/> Sell on Smartify</span>
                 <span className="flex items-center gap-2"><CreditCard size={14}/> Advertise</span>
                 <span className="flex items-center gap-2"><Gift size={14}/> Gift Cards</span>
                 <span className="flex items-center gap-2"><HelpCircle size={14}/> Help Center</span>
              </div>
              <p>&copy; {new Date().getFullYear()} Smartify Internet Private Limited. All rights reserved.</p>
           </div>
           <div className="mt-4 flex justify-center gap-4 opacity-60 grayscale hover:grayscale-0 transition-all">
              {/* Mock Payment Icons */}
              <div className="h-6 w-10 bg-slate-200 rounded"></div>
              <div className="h-6 w-10 bg-slate-200 rounded"></div>
              <div className="h-6 w-10 bg-slate-200 rounded"></div>
              <div className="h-6 w-10 bg-slate-200 rounded"></div>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;