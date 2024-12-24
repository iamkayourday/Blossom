import React, { useState, useEffect } from 'react';
import data from '../../data.json';  // Import your data

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Load categories data from the JSON file
    setCategories(data.categories);
  }, []);

  return (
    <div className="container mx-auto px-4 lg:px-80">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
        {categories.length === 0 ? (
          <p className="text-center text-lg text-gray-500">No categories available</p>
        ) : (
          categories.map((category) => (
            <div key={category.id} className="text-center">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer">
                {/* Image */}
                <img src={category.image} alt={category.name} className="w-full h-40 object-cover" />
              </div>
              {/* Text under the card */}
              <h3 className="text-sm font-semibold mt-2">{category.name}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryList;
