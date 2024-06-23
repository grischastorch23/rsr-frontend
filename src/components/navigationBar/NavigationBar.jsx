import React from 'react';
import './NavigationBar.css'; 
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NavigationBar= () => {


const navigate = useNavigate();


  return (
    <div className="navContainer">
      <div className="navigationButtons">
        <button className='navButtons' onClick={() => navigate('/productpage')}>Unser Sortiment</button>
        <button className='navButtons'>Kategorie 1</button>
        <button className='navButtons'>Kategorie 2</button>
        <button className='navButtons'>Kategorie 3</button>
        <button className='navButtons' onClick={() => navigate('/checkout')}>Checkout</button>
        <button className='navButtons' onClick={() => navigate('/productdetails')}>ProductDetails</button>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
};

export default NavigationBar;