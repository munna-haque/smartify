import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ElectronBackground from './components/ElectronBackground';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import SearchResults from './pages/SearchResults';
import Account from './pages/Account';
import Orders from './pages/Orders';
import Wishlist from './pages/Wishlist';

const { HashRouter, Routes, Route, useLocation } = ReactRouterDOM;

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    // Disable smooth scrolling temporarily for route changes to avoid long animations
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = '';
  }, [pathname]);
  return null;
}

const App: React.FC = () => {
  return (
    <HashRouter>
      {/* 
         - ElectronBackground is fixed at z-0. 
         - Main content wrapper is relative z-10 to sit on top.
      */}
      <div className="flex flex-col min-h-screen bg-transparent text-slate-800 font-sans selection:bg-pastel-purple selection:text-slate-900 relative">
        <ElectronBackground />
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <ScrollToTop />
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/account" element={<Account />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
};

export default App;