import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => {
        const foundProduct = data.find(p => p.id === parseInt(id, 10));
        setProduct(foundProduct);
      });
  }, [id]);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: '300px', height: 'auto' }} />
      <p>{product.description}</p>
      <p><strong>Price:</strong> {product.price} LKR</p>
    </div>
  );
};

export default Product;

