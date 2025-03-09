import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext) || { 
    addToCart: () => console.log('Cart context not yet implemented') 
  };
  
  const handleAddToCart = () => {
    // Create a cart item with the selected quantity
    const cartItem = {
      ...product,
      quantity: quantity
    };
    addToCart(cartItem);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };
  
  return (
    <div className="product-card">
      <div className="product-image">
        {product.image ? (
          <img src={product.image} alt={product.title} />
        ) : (
          <div className="image-placeholder"></div>
        )}
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        
        <div className="quantity-selector">
          <label htmlFor={`quantity-${product.id}`}>Quantity:</label>
          <div className="quantity-controls">
            <button 
              type="button" 
              className="quantity-btn decrease"
              onClick={decrementQuantity}
              disabled={quantity <= 1}
            >
              -
            </button>
            <input
              id={`quantity-${product.id}`}
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="quantity-input"
            />
            <button 
              type="button" 
              className="quantity-btn increase"
              onClick={incrementQuantity}
            >
              +
            </button>
          </div>
        </div>
        
        <button 
          className="add-to-cart-button"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard; 