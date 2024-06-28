import React from 'react';
import './NavigationBar.css'; 
import { BrowserRouter as useNavigate } from 'react-router-dom';


const NavigationBar= () => {


const navigate = useNavigate();


  return (
    <div className="navContainer">
      <div className="navigationButtons">
        <button className='navButtons' id='UnserSortimentButton' onClick={() => navigate('/productpage')}>Unser Sortiment</button>
        <button className='navButtons' id='Kategorie1Button'>Kategorie 1</button>
        <button className='navButtons' id='Kategorie2Button'>Kategorie 2</button>
        <button className='navButtons' id='Kategorie3Button'>Kategorie 3</button>
        <button className='navButtons' id="CheckoutButton" onClick={() => navigate('/checkout')}>Checkout</button>
        <button className='navButtons' id="ProductDetailsButton" onClick={() => navigate('/productdetails')}>ProductDetails</button>
      </div>
      <div className="search-bar" id='searchBarDiv'>
        <input type="text" id="searchBarText" placeholder="Search..." />
      </div>
    </div>
  );
};

export default NavigationBar;