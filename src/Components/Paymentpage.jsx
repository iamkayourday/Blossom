import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

// Load product data from the static JSON file
import productData from '../data.json'; // Ensure the path is correct

const PaymentPage = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

//   useEffect(() => {
//     // Find the product based on the productId from the URL params
//     const foundProduct = productData.find((item) => item.id === parseInt(productId));
//     setProduct(foundProduct);
//   }, [productId]);

//   const renderPaymentForm = () => {
//     switch (selectedPaymentMethod) {
//       case "creditCard":
//         return (
//           <div className="space-y-4">
//             <div>
//               <label className="text-lg text-gray-800">Credit Card Number</label>
//               <input
//                 type="text"
//                 placeholder="1234 5678 9012 3456"
//                 className="w-full border-2 p-3 mt-2 rounded-lg"
//               />
//             </div>
//             <div className="flex space-x-4">
//               <div className="w-1/2">
//                 <label className="text-lg text-gray-800">Expiration Date</label>
//                 <input
//                   type="text"
//                   placeholder="MM/YY"
//                   className="w-full border-2 p-3 mt-2 rounded-lg"
//                 />
//               </div>
//               <div className="w-1/2">
//                 <label className="text-lg text-gray-800">CVV</label>
//                 <input
//                   type="text"
//                   placeholder="123"
//                   className="w-full border-2 p-3 mt-2 rounded-lg"
//                 />
//               </div>
//             </div>
//           </div>
//         );
//       case "paypal":
//         return (
//           <div className="space-y-4">
//             <label className="text-lg text-gray-800">PayPal Email</label>
//             <input
//               type="email"
//               placeholder="youremail@domain.com"
//               className="w-full border-2 p-3 mt-2 rounded-lg"
//             />
//           </div>
//         );
//       case "bankTransfer":
//         return (
//           <div className="space-y-4">
//             <label className="text-lg text-gray-800">Bank Account Number</label>
//             <input
//               type="text"
//               placeholder="Your Bank Account Number"
//               className="w-full border-2 p-3 mt-2 rounded-lg"
//             />
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   const handlePayment = () => {
//     // You can further handle payment submission logic here (e.g., call API for payment gateway)
//     alert(`Processing payment via ${selectedPaymentMethod}`);
//   };

//   if (!product) return <div>Loading...</div>;

//   return (
//     <>
//       <Header />
//       <div className="container mx-auto px-4 lg:px-16 py-12">
//         <div className="bg-white rounded-lg shadow-lg p-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">
//             Payment for {product.name}
//           </h1>
//           <p className="text-lg text-gray-700 mb-8">
//             Please select a payment method for your purchase of {product.name} at{" "}
//             {product.price}.
//           </p>

//           {/* Payment Methods Section */}
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//                 Select Payment Method
//               </h3>
//               <div className="space-y-4">
//                 <div
//                   className={`flex items-center space-x-4 cursor-pointer p-4 rounded-lg border-2 ${
//                     selectedPaymentMethod === "creditCard"
//                       ? "border-blue-500"
//                       : "border-gray-300"
//                   }`}
//                   onClick={() => setSelectedPaymentMethod("creditCard")}
//                 >
//                   <img
//                     src="/images/credit-card-icon.png"
//                     alt="Credit Card"
//                     className="w-10 h-10"
//                   />
//                   <span className="text-lg text-gray-800">Credit Card</span>
//                 </div>
//                 <div
//                   className={`flex items-center space-x-4 cursor-pointer p-4 rounded-lg border-2 ${
//                     selectedPaymentMethod === "paypal"
//                       ? "border-blue-500"
//                       : "border-gray-300"
//                   }`}
//                   onClick={() => setSelectedPaymentMethod("paypal")}
//                 >
//                   <img
//                     src="/images/paypal-icon.png"
//                     alt="PayPal"
//                     className="w-10 h-10"
//                   />
//                   <span className="text-lg text-gray-800">PayPal</span>
//                 </div>
//                 <div
//                   className={`flex items-center space-x-4 cursor-pointer p-4 rounded-lg border-2 ${
//                     selectedPaymentMethod === "bankTransfer"
//                       ? "border-blue-500"
//                       : "border-gray-300"
//                   }`}
//                   onClick={() => setSelectedPaymentMethod("bankTransfer")}
//                 >
//                   <img
//                     src="/images/bank-transfer-icon.png"
//                     alt="Bank Transfer"
//                     className="w-10 h-10"
//                   />
//                   <span className="text-lg text-gray-800">Bank Transfer</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Payment Form for Selected Method */}
//           {renderPaymentForm()}

//           {/* Submit Payment */}
//           {selectedPaymentMethod && (
//             <div className="mt-8">
//               <button
//                 className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg font-semibold w-full"
//                 onClick={handlePayment}
//               >
//                 Confirm Payment
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
};

export default PaymentPage;
