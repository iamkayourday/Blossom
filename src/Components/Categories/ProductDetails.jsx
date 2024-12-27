// This component, ProductDetails, is responsible for displaying detailed information 
// about a specific product. It uses the product ID from the URL parameters to find 
// and display the corresponding product from a list of categories. The component 
// simulates loading for 2 seconds to improve UX, showing a loading message during 
// that time. If the product is not found, a "Product not found" message is displayed. 
// Once the product is loaded, it shows details such as the product image, price, 
// availability, location, description, nutritional information, certifications, 
// reviews, and seller information.

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json"; // Import your JSON data
import Header from "../Header";

const ProductDetails = () => {
  const { productId } = useParams(); // Get product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      // Find the category first
      const category = data.categories.find((cat) =>
        cat.products.some((prod) => String(prod.id) === String(productId))
      );

      // If a category is found, then find the specific product
      if (category) {
        const selectedProduct = category.products.find(
          (prod) => String(prod.id) === String(productId)
        );
        setProduct(selectedProduct);
      } else {
        setProduct(null); // If no category or product is found
      }
      setLoading(false); // Stop loading after data is set
    }, 2000);

    return () => clearTimeout(timer);
  }, [productId]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 lg:px-16 py-8 flex items-center justify-center min-h-screen">
          <div className="text-center text-lg text-gray-500 animate-pulse">
            Loading product...
          </div>
        </div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 lg:px-16 py-8 flex items-center justify-center min-h-screen">
          <p className="text-center text-lg text-gray-500">Product not found</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 lg:px-16 py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
          {/* Product Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={`/${product.image}`}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
              {product.name}
            </h1>
            <p className="text-xl font-bold text-green-600 mb-2">
              {product.price}
            </p>
            <p
              className={`text-sm ${
                product.availability === "In Stock"
                  ? "text-green-500"
                  : "text-red-500"
              } mb-6`}
            >
              {product.availability}
            </p>
            <p className="text-gray-600 mb-4">{product.description}</p>

            <div className="grid grid-cols-2 gap-6">
              {/* Nutritional Info */}
              <div>
                <h4 className="text-lg font-semibold mb-2">Nutritional Info</h4>
                <p className="text-sm text-gray-700">
                  {product.nutritional_info}
                </p>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-lg font-semibold mb-2">Certifications</h4>
                <ul className="text-sm text-gray-700">
                  {product.certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Reviews */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Reviews</h4>
              <ul>
                {product.reviews.map((review, index) => (
                  <li
                    key={index}
                    className="border-b border-gray-200 py-4 text-sm"
                  >
                    <p className="font-semibold text-gray-800">{review.user}</p>
                    <p className="text-gray-600">Rating: {review.rating} / 5</p>
                    <p className="text-gray-700">{review.comment}</p>
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Seller Info */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Seller Info</h4>
              <p className="text-sm text-gray-700">
                <strong>{product.seller.name}</strong>
                <br />
                Location: {product.seller.location}
                <br />
                Contact: {product.seller.contact}
                <br />
                Rating: {product.seller.rating} / 5
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex space-x-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg font-semibold">
                Add to Cart
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg font-semibold">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
