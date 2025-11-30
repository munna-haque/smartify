import React, { useEffect, useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { searchProducts } from '../data/products';
import { Product } from '../types';

const { useLocation } = ReactRouterDOM;

const SearchResults: React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    if (query) {
      setResults(searchProducts(query));
    }
  }, [query]);

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-slate-800 mb-6">
          Results for "{query}" 
          <span className="text-sm text-slate-500 font-normal ml-2">({results.length} items)</span>
        </h1>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 glass-panel">
            <h2 className="text-xl text-slate-600 mb-2">No results found</h2>
            <p className="text-slate-400">Try checking your spelling or use different keywords.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;