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
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold text-green-600 mb-2">{product.price}</p>
            <p
              className={`text-sm font-medium mb-6 ${
                product.availability === "In Stock"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {product.availability}
            </p>
            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Nutritional Info & Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg shadow-sm bg-white">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Nutritional Info</h4>
                <p className="text-sm text-gray-700">{product.nutritional_info}</p>
              </div>

              <div className="p-4 border rounded-lg shadow-sm bg-white">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Certifications</h4>
                <ul className="text-sm text-gray-700">
                  {product.certifications.map((cert, index) => (
                    <li key={index} className="mb-2">{cert}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Customer Reviews</h4>
              <ul>
                {product.reviews.map((review, index) => (
                  <li
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 mb-4 shadow-sm bg-white"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-semibold text-gray-800">{review.user}</p>
                        <p className="text-xs text-gray-500">{review.date}</p>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            fill={i < review.rating ? "gold" : "none"}
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="gold"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.48 3.499a.75.75 0 011.04 0l2.287 2.317 3.207.363a.75.75 0 01.416 1.301l-2.514 2.126.728 3.435a.75.75 0 01-1.109.805l-3.095-1.865-3.094 1.865a.75.75 0 01-1.109-.805l.728-3.435L4.57 7.48a.75.75 0 01.416-1.301l3.207-.363L10.48 3.5z"
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="mt-2 text-gray-700">{review.comment}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Seller Info */}
            <div className="mt-8 p-4 border rounded-lg shadow-sm bg-white">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Seller Info</h4>
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

            {/* Warning */}
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded mb-6 mt-6">
              <p className="font-bold">Important Notice:</p>
              <p>
                Do not send payment to anyone outside this app. All product
                payments must be made through this platform for your security
                and protection.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex space-x-4">
              <button className="border border-green-700 text-green-700 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-green-100 transition">
                Request Callback
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition">
                Contact Seller
              </button>

              {/* Make Payment Button */}
  <button
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg font-semibold"
    // onClick={() => window.location.href = `/payment/${productId}`}
  >
    Make Payment
  </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;


