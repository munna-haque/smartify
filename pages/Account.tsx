import React from 'react';
import { useUser } from '../context/UserContext';
import { User, MapPin, CreditCard, LogOut, Wallet } from 'lucide-react';

const Account: React.FC = () => {
  const { user, isAuthenticated, login, logout, addresses } = useUser();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="glass-panel p-10 text-center max-w-sm w-full">
           <h2 className="text-xl font-bold mb-4">Login Required</h2>
           <p className="text-slate-500 mb-6">Please log in to manage your account.</p>
           <button onClick={login} className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold shadow-lg hover:bg-blue-700 transition-colors">Login Now</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-slate-50/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-tech font-bold text-slate-800 mb-8">MY ACCOUNT</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Sidebar */}
           <div className="space-y-6">
              <div className="glass-panel p-6 flex items-center gap-4">
                 <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {user?.name.charAt(0)}
                 </div>
                 <div>
                    <h2 className="font-bold text-slate-800">Hello, {user?.name.split(' ')[0]}</h2>
                    <p className="text-xs text-slate-500">{user?.email}</p>
                 </div>
              </div>

              <div className="glass-panel p-0 overflow-hidden">
                 <div className="p-4 border-b border-white/50 bg-white/40 font-bold text-slate-600 text-sm uppercase">Dashboard</div>
                 <nav className="flex flex-col">
                    <button className="text-left px-6 py-4 hover:bg-white/60 text-blue-600 font-medium border-l-4 border-blue-500 transition-all flex items-center gap-3">
                       <User size={18}/> Profile Information
                    </button>
                    <button className="text-left px-6 py-4 hover:bg-white/60 text-slate-600 font-medium border-l-4 border-transparent hover:border-blue-300 transition-all flex items-center gap-3">
                       <MapPin size={18}/> Manage Addresses
                    </button>
                    <button className="text-left px-6 py-4 hover:bg-white/60 text-slate-600 font-medium border-l-4 border-transparent hover:border-blue-300 transition-all flex items-center gap-3">
                       <CreditCard size={18}/> PAN Card Information
                    </button>
                    <button onClick={logout} className="text-left px-6 py-4 hover:bg-red-50 text-red-500 font-medium border-l-4 border-transparent transition-all flex items-center gap-3 border-t border-white/50">
                       <LogOut size={18}/> Logout
                    </button>
                 </nav>
              </div>
           </div>

           {/* Main Content */}
           <div className="md:col-span-2 space-y-8">
              {/* Personal Info */}
              <div className="glass-panel p-8">
                 <h3 className="text-xl font-bold text-slate-800 mb-6 font-heading flex items-center gap-2"><User size={20} className="text-blue-500"/> Personal Information</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                       <label className="text-xs text-slate-500 uppercase tracking-wider block mb-2">Full Name</label>
                       <div className="glass-input p-3 rounded-lg text-slate-800 font-medium">{user?.name}</div>
                    </div>
                    <div>
                       <label className="text-xs text-slate-500 uppercase tracking-wider block mb-2">Email Address</label>
                       <div className="glass-input p-3 rounded-lg text-slate-800 font-medium">{user?.email}</div>
                    </div>
                    <div>
                       <label className="text-xs text-slate-500 uppercase tracking-wider block mb-2">Mobile Number</label>
                       <div className="glass-input p-3 rounded-lg text-slate-800 font-medium">{user?.phone}</div>
                    </div>
                    <div>
                       <label className="text-xs text-slate-500 uppercase tracking-wider block mb-2">Gender</label>
                       <div className="glass-input p-3 rounded-lg text-slate-800 font-medium">Male</div>
                    </div>
                 </div>
                 <button className="mt-6 text-blue-600 text-sm font-bold hover:underline">Edit Information</button>
              </div>

              {/* Wallet Info */}
              <div className="glass-panel p-8 bg-gradient-to-r from-blue-50 to-purple-50">
                 <h3 className="text-xl font-bold text-slate-800 mb-6 font-heading flex items-center gap-2"><Wallet size={20} className="text-purple-500"/> Smartify Wallet</h3>
                 <div className="flex items-center gap-12">
                    <div>
                       <p className="text-sm text-slate-500 mb-1">Available Balance</p>
                       <p className="text-3xl font-tech font-bold text-slate-800">₹{user?.walletBalance.toLocaleString()}</p>
                    </div>
                    <div>
                       <p className="text-sm text-slate-500 mb-1">SmartCoins</p>
                       <p className="text-3xl font-tech font-bold text-yellow-600">{user?.coins}</p>
                    </div>
                 </div>
              </div>

              {/* Addresses */}
              <div className="glass-panel p-8">
                 <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-slate-800 font-heading flex items-center gap-2"><MapPin size={20} className="text-green-500"/> Manage Addresses</h3>
                    <button className="text-blue-600 text-sm font-bold border border-blue-200 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">+ Add New Address</button>
                 </div>
                 
                 <div className="space-y-4">
                    {addresses.map(addr => (
                       <div key={addr.id} className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow bg-white/60">
                          <div className="flex justify-between mb-2">
                             <span className="bg-slate-200 text-slate-600 text-[10px] uppercase font-bold px-2 py-0.5 rounded">{addr.type}</span>
                             {addr.isDefault && <span className="text-blue-600 text-xs font-bold">★ Default</span>}
                          </div>
                          <p className="font-bold text-slate-800">{addr.name} <span className="font-normal text-slate-500 ml-2">{addr.phone}</span></p>
                          <p className="text-sm text-slate-600 mt-1">{addr.street}, {addr.city}, {addr.state} - <span className="font-bold">{addr.zip}</span></p>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Account;