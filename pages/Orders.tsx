import React from 'react';
import { useUser } from '../context/UserContext';
import { Package, ChevronRight, Clock, CheckCircle } from 'lucide-react';
import * as ReactRouterDOM from 'react-router-dom';

const { Link } = ReactRouterDOM;

const Orders: React.FC = () => {
  const { user, isAuthenticated, orders, login } = useUser();

  if (!isAuthenticated) return <div className="text-center py-20"><button onClick={login} className="text-blue-600 font-bold underline">Login to view orders</button></div>;

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4 max-w-5xl">
         <h1 className="text-2xl font-bold text-slate-800 mb-8 font-tech">MY ORDERS</h1>

         <div className="space-y-6">
            {orders.length > 0 ? orders.map(order => (
               <div key={order.id} className="glass-panel p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 pb-4 border-b border-slate-100">
                     <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                           <Package size={24} />
                        </div>
                        <div>
                           <p className="font-bold text-slate-800">{order.status}</p>
                           <p className="text-xs text-slate-500">On {new Date(order.date).toLocaleDateString()}</p>
                        </div>
                     </div>
                     <div className="mt-4 md:mt-0 text-right">
                        <p className="text-sm text-slate-500">Order ID: {order.id}</p>
                        <p className="font-bold text-slate-800">Total: ₹{order.total.toLocaleString()}</p>
                     </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-600 mb-4 bg-slate-50 p-3 rounded-lg">
                     {order.status === 'Delivered' ? <CheckCircle size={16} className="text-green-500"/> : <Clock size={16} className="text-orange-500"/>}
                     <span>
                        {order.status === 'Delivered' 
                           ? `Item delivered to ${order.shippingAddress.name}` 
                           : 'Your item is being processed'}
                     </span>
                  </div>

                  <button className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                     View Order Details <ChevronRight size={16}/>
                  </button>
               </div>
            )) : (
               <div className="text-center py-16 glass-panel">
                  <Package size={48} className="mx-auto text-slate-300 mb-4"/>
                  <h3 className="text-xl font-bold text-slate-600">No Orders Yet</h3>
                  <p className="text-slate-400 mb-6">Start shopping to fill your history.</p>
                  <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold">Start Shopping</Link>
               </div>
            )}
         </div>
      </div>
    </div>
  );
};

export default Orders;