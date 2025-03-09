import { useState } from 'react';
import ProductList from '../components/shop/ProductList';
import Cart from '../components/cart/Cart';

function Shop() {
  const [showCart, setShowCart] = useState(false);
  
  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>Shop Products</h1>
        <button 
          className="cart-toggle"
          onClick={() => setShowCart(!showCart)}
        >
          {showCart ? 'Hide Cart' : 'Show Cart'}
        </button>
      </div>
      
      <div className="shop-content">
        <div className={`product-section ${showCart ? 'with-cart' : ''}`}>
          <ProductList />
        </div>
        
        {showCart && (
          <div className="cart-sidebar">
            <Cart />
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop; 