import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserProfile, Order, Address, Product } from '../types';

interface UserContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  orders: Order[];
  addresses: Address[];
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within a UserProvider');
  return context;
};

// Mock Initial Data
const MOCK_USER: UserProfile = {
  name: "Alex Smart",
  email: "alex@smartify.com",
  phone: "+91 98765 43210",
  walletBalance: 2450,
  coins: 500
};

const MOCK_ADDRESSES: Address[] = [
  {
    id: 'addr1',
    type: 'Home',
    name: 'Alex Smart',
    phone: '9876543210',
    street: '123 Innovation Tower, Cyber City',
    city: 'Bangalore',
    state: 'Karnataka',
    zip: '560100',
    isDefault: true
  }
];

const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD-2024-001',
    date: '2023-10-15',
    total: 84999,
    status: 'Delivered',
    paymentMethod: 'UPI',
    items: [], // Populated in a real app
    shippingAddress: MOCK_ADDRESSES[0]
  }
];

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  
  // Login Simulation
  const login = () => setUser(MOCK_USER);
  const logout = () => setUser(null);

  const addToWishlist = (product: Product) => {
    setWishlist(prev => {
      if (prev.find(p => p.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist(prev => prev.filter(p => p.id !== productId));
  };

  return (
    <UserContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      logout,
      wishlist,
      addToWishlist,
      removeFromWishlist,
      orders: user ? MOCK_ORDERS : [],
      addresses: user ? MOCK_ADDRESSES : []
    }}>
      {children}
    </UserContext.Provider>
  );
};