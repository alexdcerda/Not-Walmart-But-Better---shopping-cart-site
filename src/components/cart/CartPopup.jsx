import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

/**
 * Component for displaying a popup with cart contents
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Whether the popup is open
 * @param {Function} props.onClose - Function to close the popup
 */
function CartPopup({ isOpen, onClose }) {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice 
  } = useContext(CartContext);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    // Close the popup when clicking the backdrop (outside the popup content)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCheckout = () => {
    alert('Checkout functionality would go here!');
    // In a real app, you would redirect to a checkout page
    onClose();
  };

  return (
    <div className="cart-popup-backdrop" onClick={handleBackdropClick}>
      <div className="cart-popup">
        <div className="cart-popup-header">
          <h2>Your Cart</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="cart-popup-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart-message">
              Your cart is empty. Add some products!
            </div>
          ) : (
            <>
              <ul className="cart-items">
                {cartItems.map((item) => (
                  <li key={item.id} className="cart-item">
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
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          className="quantity-btn increase"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
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
                  </li>
                ))}
              </ul>
              
              <div className="cart-summary">
                <div className="cart-total">
                  <span>Total:</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <button 
                  className="checkout-button"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartPopup; 