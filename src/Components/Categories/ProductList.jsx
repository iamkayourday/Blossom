import React, { useState, useEffect } from 'react';
import data from '../../data.json';  // Import your data

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Extract the products from the data
    const allProducts = data.categories.flatMap(category => category.products);
    setProducts(allProducts);
  }, []);

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
