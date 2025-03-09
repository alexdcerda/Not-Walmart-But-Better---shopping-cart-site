import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function CartItem({ item }) {
  // We'll implement the CartContext later, for now we'll use placeholders
  const { 
    removeFromCart = () => console.log('Not implemented'),
    updateQuantity = () => console.log('Not implemented')
  } = useContext(CartContext) || {};
  
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        {item.image ? (
          <img src={item.image} alt={item.title} />
        ) : (
          <div className="image-placeholder"></div>
        )}
      </div>
      
      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
      </div>
      
      <div className="cart-item-actions">
        <div className="quantity-controls">
          <button 
            className="quantity-btn decrease"
            onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
            disabled={(item.quantity || 1) <= 1}
          >
            -
          </button>
          <span className="quantity">{item.quantity || 1}</span>
          <button 
            className="quantity-btn increase"
            onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
          >
            +
          </button>
        </div>
        
        <button 
          className="remove-btn"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem; 