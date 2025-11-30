import React, { useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getProductsByCategory } from '../data/products';

const { useParams } = ReactRouterDOM;

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const products = category ? getProductsByCategory(category) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div className="py-20 min-h-screen relative">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-pastel-blue/10 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-2 block bg-blue-50 inline-block px-3 py-1 rounded-full border border-blue-100">Premium Collection</span>
          <h1 className="text-5xl font-tech font-bold text-slate-800 mb-6 uppercase drop-shadow-sm">{category}</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Discover our premium range of {category?.toLowerCase()}. Engineered for performance, designed for the future.
          </p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 glass-panel">
            <h2 className="text-2xl text-slate-800 mb-2 font-tech">System Empty</h2>
            <p className="text-slate-500">No data found for this category. Check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;