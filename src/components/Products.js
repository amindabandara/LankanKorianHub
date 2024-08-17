import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css'; // Make sure to add some CSS for styling

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products.json') // Ensure this path points to your products data
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="products-container">
      <h1>Our Products</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>Price:</strong> {product.price} LKR</p>
            <a 
              href={`https://wa.me/+94713409047?text=I%20would%20like%20to%20buy%20${encodeURIComponent(product.name)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="buy-button">
                Buy
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
