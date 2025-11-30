
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-tech font-bold text-slate-800 mb-4">INITIATE <span className="text-blue-500">CONTACT</span></h1>
          <p className="text-slate-500">Our support neural network is online 24/7.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info Side */}
          <div className="space-y-8">
            <div className="glass-panel p-8 shadow-lg shadow-blue-50">
              <h3 className="text-xl font-bold text-slate-800 mb-8 font-heading flex items-center gap-2">
                 <MessageSquare className="text-blue-500" size={20}/> Communication Channels
              </h3>
              <ul className="space-y-8">
                <li className="flex items-start gap-5">
                  <div className="p-4 bg-pastel-blue/30 rounded-2xl text-blue-800 border border-blue-100"><Mail size={24} /></div>
                  <div>
                    <h4 className="text-slate-800 font-bold mb-1">Email Uplink</h4>
                    <p className="text-slate-500 font-mono text-sm">support@smartify.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="p-4 bg-pastel-purple/30 rounded-2xl text-purple-800 border border-purple-100"><Phone size={24} /></div>
                  <div>
                    <h4 className="text-slate-800 font-bold mb-1">Voice Line</h4>
                    <p className="text-slate-500 font-mono text-sm">+91 98765 43210</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="p-4 bg-pastel-green/30 rounded-2xl text-green-800 border border-green-100"><MapPin size={24} /></div>
                  <div>
                    <h4 className="text-slate-800 font-bold mb-1">Physical Base</h4>
                    <p className="text-slate-500 text-sm">
                      Smartify HQ, Innovation Park<br />
                      Sector 42, Cyber City
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass-panel p-8 relative overflow-hidden shadow-xl">
             <div className="absolute top-0 right-0 w-32 h-32 bg-pastel-blue/20 rounded-full blur-[40px]"></div>
             <h3 className="text-xl font-bold text-slate-800 mb-8 font-heading">Send Transmission</h3>
             <form onSubmit={handleSubmit} className="space-y-5">
               <div>
                 <label className="block text-xs text-slate-500 mb-2 uppercase tracking-wider">Identity</label>
                 <input required type="text" className="w-full glass-input rounded-xl p-3 text-slate-800 focus:outline-none transition-all shadow-sm" placeholder="Your Name" />
               </div>
               <div>
                 <label className="block text-xs text-slate-500 mb-2 uppercase tracking-wider">Email Frequency</label>
                 <input required type="email" className="w-full glass-input rounded-xl p-3 text-slate-800 focus:outline-none transition-all shadow-sm" placeholder="your@email.com" />
               </div>
               <div>
                 <label className="block text-xs text-slate-500 mb-2 uppercase tracking-wider">Data Payload</label>
                 <textarea required rows={5} className="w-full glass-input rounded-xl p-3 text-slate-800 focus:outline-none transition-all shadow-sm resize-none" placeholder="How can we assist?"></textarea>
               </div>
               <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl transition-all hover:bg-slate-800 hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg">
                 {status === 'success' ? 'Transmission Sent!' : <><Send size={18} /> Transmit Message</>}
               </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
