import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../../data.json'; // Import your data

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds (can be replaced with an actual API call)
    setTimeout(() => {
      setCategories(data.categories);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="container mx-auto px-4 lg:px-80">
      {/* Header Section */}
      <header className="py-6 text-center">
        <h1 className="text-2xl font-bold text-[#1f6306]">Category List</h1>
        <p className="text-gray-500 mt-2">Explore our available categories below</p>
      </header>

      {/* Grid Section */}
      <div className="grid grid-cols-3 gap-6 py-4">
        {loading ? (
          // Render Skeleton Loaders
          Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-200 animate-pulse rounded-xl h-40 w-full"></div>
              <div className="bg-gray-200 animate-pulse rounded-md h-4 w-3/4 mt-2 mx-auto"></div>
            </div>
          ))
        ) : categories.length === 0 ? (
          <p className="text-center text-lg text-gray-500">No categories available</p>
        ) : (
          categories.map((category) => (
            <div key={category.id} className="text-center">
              <Link to={`/category/${category.id}`}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transform transition-all">
                  {/* Image */}
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-40 object-cover"
                  />
                </div>
                {/* Text under the card */}
                <h3 className="text-sm font-semibold mt-2">{category.name}</h3>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryList;
