import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../../data.json'; // Import your JSON data
import Header from '../Header';

const CategoryDetails = () => {
  const { id } = useParams(); // Get category ID from the URL
  const [category, setCategory] = useState(null);
  const navigate = useNavigate(); // React Router hook for navigation

  useEffect(() => {
    // Find the category by ID
    const selectedCategory = data.categories.find((cat) => String(cat.id) === String(id));
    setCategory(selectedCategory);
  }, [id]);

  if (!category) {
    return <p className="text-center text-lg text-gray-500">Category not found</p>;
  }

  return (
    <>
    <Header />

    <div className="container mx-auto px-4 lg:px-16 py-8">
      {/* Back Arrow for Mobile */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)} // Navigate back
          className="p-2 text-gray-600 hover:text-gray-800 md:hidden"
        >
          {/* Back Arrow Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-3xl font-bold text-gray-800 text-center flex-1">{category.name}</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {category.products.length === 0 ? (
          <p className="text-center text-lg text-gray-500">No products available</p>
        ) : (
          category.products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden text-center cursor-pointer">
              {/* Product Image */}
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                {/* Product Name */}
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                {/* Product Price */}
                <p className="text-xl font-bold text-gray-900 mt-2">{product.price}</p>
                {/* Product Availability */}
                <p className={`text-sm mt-1 ${product.availability === 'In Stock' ? 'text-green-500' : 'text-red-500'}`}>
                  {product.availability}
                </p>
                {/* Product Location */}
                <p className="text-sm text-gray-500">{product.location}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </>
  );
};

export default CategoryDetails;
