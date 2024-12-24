import React, { useState, useEffect } from 'react';
import data from '../../data.json'; // Import your data

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    // Simulate a loading phase
    const timer = setTimeout(() => {
      const allProducts = data.categories.flatMap(category => category.products);
      setProducts(allProducts);
      setLoading(false);
    }, 2000); // Simulate a 2-second load
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Render skeleton loader
    return (
      <div className="container mx-auto px-4 lg:px-16 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-xl shadow-lg overflow-hidden text-center animate-pulse"
            >
              {/* Image Skeleton */}
              <div className="w-full h-48 bg-gray-300"></div>
              {/* Text Skeleton */}
              <div className="p-4">
                <div className="h-4 bg-gray-300 rounded-md mb-2"></div>
                <div className="h-3 bg-gray-300 rounded-md mb-1"></div>
                <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
                <div className="h-3 bg-gray-300 rounded-md"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 lg:px-16 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length === 0 ? (
          <p className="text-center text-lg text-gray-500">No products available</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden text-center cursor-pointer">
              {/* Image */}
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                {/* Product Name */}
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                {/* Location */}
                <p className="text-sm text-gray-500">{product.location}</p>
                {/* Price */}
                <p className="text-xl font-bold text-gray-900 mt-2">{product.price}</p>
                {/* Availability */}
                <p className={`text-sm mt-1 ${product.availability === 'In Stock' ? 'text-green-500' : 'text-red-500'}`}>
                  {product.availability}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
