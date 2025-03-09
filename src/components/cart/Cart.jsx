import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';

function Cart() {
  // We'll implement the CartContext later, for now we'll use a placeholder
  const { cartItems = [], getTotalPrice = () => 0 } = useContext(CartContext) || {};
  
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="cart-total">
              <span>Total:</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            <button className="checkout-button">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart; 