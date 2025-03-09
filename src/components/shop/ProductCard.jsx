import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function ProductCard({ product }) {
  // We'll implement the CartContext later, for now we'll use a placeholder
  const { addToCart } = useContext(CartContext) || { addToCart: () => console.log('Cart context not yet implemented') };
  
  return (
    <div className="product-card">
      <div className="product-image">
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <div className="image-placeholder"></div>
        )}
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button 
          className="add-to-cart-button"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard; 