import React, { useState } from 'react';
import './Product.css';

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="product-container" id='product-container'>
      <div className="product-image" id='product-image'>
        <img src="https://via.placeholder.com/150" alt="Product" />
      </div>
      <div className="product-details" id='product-details'>
        <h1>Amethyst 1</h1>
        <div className="product-rating" id='product-rating'>
          <span className="stars" id='productStars'>★★★★★</span>
          <span className="reviews" id='productReview'>10 auf</span>
        </div>
        <div className="product-description">
          Kurze Beschreibung hier:
          <br />
          - 
          <br />
          - 
          <br />
          - 
          <br />
          - 
        </div>
        <div className="product-price">
          € 24,00 EUR
          <br />
          <span className="vat">inkl. MwSt., Versand wird beim Checkout berechnet</span>
        </div>
        <div className="product-quantity">
          Menge:
          <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />
        </div>
        <button className="add-to-cart">In den Warenkorb</button>
      </div>
    </div>
  );
};

export default Product;