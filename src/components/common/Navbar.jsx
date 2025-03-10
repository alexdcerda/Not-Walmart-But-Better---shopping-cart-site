import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import CartPopup from '../cart/CartPopup';

function Navbar() {
  const { getTotalItems = () => 0 } = useContext(CartContext) || {};
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const toggleCart = (e) => {
    e.preventDefault(); // Prevent navigation when clicking the cart icon
    setIsCartOpen(!isCartOpen);
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">not walmart</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
      <div className="navbar-cart">
        <a href="#" className="cart-icon" onClick={toggleCart}>
          🛒 <span className="cart-count">{getTotalItems()}</span>
        </a>
      </div>
      
      {/* Cart Popup */}
      <CartPopup 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </nav>
  );
}

export default Navbar; 