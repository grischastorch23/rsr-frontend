import React from 'react';
import './Basket.css';

const Basket = ({ items, total, shippingCost }) => {
    return (
      <div className="basket-container">
        <h2 className='warenkorbTitle'>Warenkorb</h2>
        <div className="basket-content">
          <div className="items-list">
            <h3>Artikel im Warenkorb:</h3>
            <ul>
              <p>Liste der Items</p>
            </ul>
          </div>
          <div className="basket-summary">
            <div className="basket-summary-item">
              <span>Gesamt:</span>
              <span>{total}€</span>
            </div>
            <div className="basket-summary-item">
              <span>Versandkosten:</span>
              <span>{shippingCost}€</span>
            </div>
            <div className="basket-summary-item">
              <span>Du zahlst:</span>
              <span>{total + shippingCost}€</span>
            </div>
            <button className="checkout-button">Zur Kasse</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Basket;