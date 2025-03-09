import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function Navbar() {
  const { getTotalItems = () => 0 } = useContext(CartContext) || {};
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">ShopMock</Link>
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
        <Link to="/shop" className="cart-icon">
          🛒 <span className="cart-count">{getTotalItems()}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar; 