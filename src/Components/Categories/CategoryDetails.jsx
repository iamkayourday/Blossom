// This component, CategoryDetails, is responsible for displaying detailed information 
// about a specific product category. It retrieves the category data based on the 
// category ID from the URL (using useParams) and displays the category name and 
// its associated products. If the category is still loading, a skeleton loader is shown. 
// If no products are available or if the category is not found, appropriate messages are displayed. 
// The component also includes a back button for mobile, allowing users to navigate back to the previous page. 
// Each product is clickable, linking to a detailed product page.

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../../data.json'; // Import your JSON data
import Header from '../Header';
import { Link } from 'react-router-dom'; // Import Link for navigation

const CategoryDetails = () => {
  // Get the category ID from the URL using the useParams hook
  const { id } = useParams();
  
  // State to store the category data and loading state
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state to simulate data fetching

  // useNavigate hook to allow navigation in the app
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading delay for better UX experience
    const timer = setTimeout(() => {
      // Find the category by ID from the data
      const selectedCategory = data.categories.find((cat) => String(cat.id) === String(id));
      setCategory(selectedCategory); // Set the found category
      setLoading(false); // Stop loading after data is set
    }, 2000); // Simulate a 2-second loading time

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [id]);

  if (loading) {
    // Show skeleton loader while data is being fetched
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 lg:px-16 py-8">
          <div className="flex items-center mb-6">
            {/* Mobile back button skeleton */}
            <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse md:hidden"></div>
            <div className="w-1/3 h-8 bg-gray-300 rounded-md animate-pulse mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden text-center p-4 animate-pulse">
                {/* Product Image Skeleton */}
                <div className="w-full h-48 bg-gray-300 rounded-md"></div>
                <div className="mt-4">
                  {/* Text Skeletons */}
                  <div className="w-2/3 h-6 bg-gray-300 rounded-md mx-auto mb-2"></div>
                  <div className="w-1/2 h-5 bg-gray-300 rounded-md mx-auto mb-2"></div>
                  <div className="w-1/3 h-5 bg-gray-300 rounded-md mx-auto"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (!category) {
    // If no category is found, display a message
    return (
      <>
        <Header />
        <p className="text-center text-lg text-gray-500">Category not found</p>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 lg:px-16 py-8">
        {/* Back button for mobile, allows navigation to the previous page */}
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate(-1)} // Navigate back to the previous page
            className="p-2 text-gray-600 hover:text-gray-800 md:hidden"
          >
            {/* Back Arrow Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-3xl font-bold text-gray-800 text-center flex-1">{category.name}</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {category.products.length === 0 ? (
            // If no products are available in the category
            <p className="text-center text-lg text-gray-500">No products available</p>
          ) : (
            category.products.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`} // Link to the product details page
                className="bg-white rounded-xl shadow-lg overflow-hidden text-center cursor-pointer"
              >
                {/* Product Image */}
                <img src={`/${product.image}`} alt={product.name} className="w-full h-48 object-cover" />

                <div className="p-4">
                  {/* Product Name */}
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  {/* Product Price */}
                  <p className="text-xl font-bold text-gray-900 mt-2">{product.price}</p>
                  {/* Product Availability */}
                  <p
                    className={`text-sm mt-1 ${product.availability === 'In Stock' ? 'text-green-500' : 'text-red-500'}`}
                  >
                    {product.availability}
                  </p>
                  {/* Product Location */}
                  <p className="text-sm text-gray-500">{product.location}</p>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryDetails;
