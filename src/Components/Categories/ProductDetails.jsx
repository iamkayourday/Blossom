import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data.json'; // Import your JSON data
import Header from '../Header';

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
        <div className="container mx-auto px-4 lg:px-16 py-8">
          <div className="text-center text-lg text-gray-500">Loading product...</div>
        </div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <p className="text-center text-lg text-gray-500">Product not found</p>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 lg:px-16 py-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">{product.name}</h1>
        <div className="flex justify-center mb-6">
          <img
            src={`/${product.image}`}
            alt={product.name}
            className="w-80 h-80 object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-gray-900">{product.price}</p>
          <p
            className={`text-sm mt-2 ${
              product.availability === 'In Stock' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {product.availability}
          </p>
          <p className="text-sm text-gray-500 mt-2">{product.location}</p>
          <p className="mt-4 text-sm text-gray-700">{product.description}</p>

          <div className="mt-6">
            <h4 className="text-lg font-semibold">Nutritional Info:</h4>
            <p className="text-sm text-gray-700">{product.nutritional_info}</p>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold">Certifications:</h4>
            <ul className="text-sm text-gray-700">
              {product.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold">Reviews:</h4>
            <ul className="text-sm text-gray-700">
              {product.reviews.map((review, index) => (
                <li key={index} className="mt-4">
                  <p className="font-semibold">{review.user}</p>
                  <p>Rating: {review.rating} / 5</p>
                  <p>{review.comment}</p>
                  <p className="text-gray-500">{review.date}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold">Seller Info:</h4>
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
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
