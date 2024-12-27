import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../../data.json';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ location: '', availability: '', sort: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    const timer = setTimeout(() => {
      const allProducts = data.categories.flatMap((category) => category.products);
      setProducts(allProducts);
      setFilteredProducts(allProducts); // Initialize with all products
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle Filters and Sorting
  useEffect(() => {
    let updatedProducts = [...products];

    // Apply location filter
    if (filters.location) {
      updatedProducts = updatedProducts.filter((product) =>
        product.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Apply availability filter
    if (filters.availability) {
      updatedProducts = updatedProducts.filter(
        (product) => product.availability === filters.availability
      );
    }

    // Apply sorting
    if (filters.sort === 'price-asc') {
      updatedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (filters.sort === 'price-desc') {
      updatedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    setFilteredProducts(updatedProducts);
    setCurrentPage(1); // Reset to the first page after filtering
  }, [filters, products]);

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>; // Replace with your skeleton loader
  }

  return (
    <div className="container mx-auto px-4 lg:px-16 py-8">
      {/* Header Section */}
      <header className="py-6 text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1f6306]">Product List</h1>
        <p className="text-gray-500 mt-2">Browse through our wide range of products</p>
      </header>

      {/* Filter and Sort Options */}
      <div className="mb-6 flex flex-wrap gap-4 justify-center">
        <input
          type="text"
          placeholder="Filter by location"
          className="border rounded-lg px-3 py-2 w-full sm:w-64"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        />
        <select
          className="border rounded-lg px-3 py-2 w-full sm:w-48"
          value={filters.availability}
          onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
        >
          <option value="">All Availability</option>
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
        <select
          className="border rounded-lg px-3 py-2 w-full sm:w-48"
          value={filters.sort}
          onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
        >
          <option value="">Sort by Price</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.length === 0 ? (
          <p className="text-center text-lg text-gray-500 col-span-full">No products found</p>
        ) : (
          currentProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden text-center cursor-pointer transform transition-all hover:scale-105"
            >
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-xl" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.location}</p>
                <p className="text-xl font-bold text-gray-900 mt-2">{product.price}</p>
                <p
                  className={`text-sm mt-1 ${
                    product.availability === 'In Stock' ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {product.availability}
                </p>
              </div>
            </Link>
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        {Array.from({
          length: Math.ceil(filteredProducts.length / productsPerPage),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === index + 1 ? 'bg-[#1f6306] text-white' : 'bg-gray-200'
            } transition-all hover:bg-[#1f6306] hover:text-white`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
