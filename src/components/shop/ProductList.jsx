import { useState } from 'react';
import ProductCard from './ProductCard';

function ProductList() {
  // Mock product data - in a real app, this would come from an API or context
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 19.99, image: '' },
    { id: 2, name: 'Product 2', price: 24.99, image: '' },
    { id: 3, name: 'Product 3', price: 14.99, image: '' },
    { id: 4, name: 'Product 4', price: 34.99, image: '' },
    { id: 5, name: 'Product 5', price: 9.99, image: '' },
    { id: 6, name: 'Product 6', price: 29.99, image: '' },
  ]);

  return (
    <div className="product-list">
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList; 