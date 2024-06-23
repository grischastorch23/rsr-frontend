import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import './ProductPage.css';

const products = [
  { id: 1, name: 'Amethyst 1', price: '€ 36,00 EUR', imageUrl: '/path/to/image1.png' },
  { id: 2, name: 'Amethyst 2', price: '€ 36,00 EUR', originalPrice: '€ 45,00 EUR', imageUrl: '/path/to/image2.png' },
  { id: 3, name: 'Amethyst 3', price: '€ 36,00 EUR', imageUrl: '/path/to/image3.png' },
  { id: 4, name: 'Amethyst 4', price: '€ 36,00 EUR', imageUrl: '/path/to/image4.png' },
];



const ProductPage = () => (
  
    <div className="products-list">
      {products.map(product => (
        <div className="product-item" key={product.id}>
          <Link to={`/product/${product.id}`}>    {/* `/product/${product.id}` */}
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            {product.originalPrice && <p className="original-price">{product.originalPrice}</p>}
          </Link>
        </div>
      ))}
    </div>

);

export default ProductPage;