import React from 'react';
import './Basket.css';

const Basket = ({ items, total, shippingCost }) => {
    return (
      <div className="basket-container" id='basket-container'>
        <h2 className='warenkorbTitle' id='warenkorbTitle'>Warenkorb</h2>
        <div className="basket-content" id='basket-content'>
          <div className="items-list" id='items-list'>
            <h3>Artikel im Warenkorb:</h3>
            <ul>
              <p>Liste der Items</p>
            </ul>
          </div>
          <div className="basket-summary" id='basket-summary'>
            <div className="basket-summary-item" id='basket-summary-item'>
              <span>Gesamt:</span>
              <span id='Gesamtkosten'>{total}€</span>
            </div>
            <div className="basket-summary-item" id='basket-summary-item'>
              <span>Versandkosten:</span>
              <span id='Versandkosten'>{shippingCost}€</span>
            </div>
            <div className="basket-summary-item" id='basket-summary-item'>
              <span>Du zahlst:</span>
              <span id='GesamtUndVersandkosten'>{total + shippingCost}€</span>
            </div>
            <button className="checkout-button" id='checkout-button'>Zur Kasse</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Basket;