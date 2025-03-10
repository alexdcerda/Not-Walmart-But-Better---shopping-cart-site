import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

/**
 * Component for displaying a featured product on the home page
 * @param {Object} product - The product to display
 */
function FeaturedProduct({ product }) {
  const [quantity] = useState(1); // Default quantity is 1 for featured products
  const { addToCart } = useContext(CartContext) || { 
    addToCart: () => console.log('Cart context not yet implemented') 
  };
  
  const handleAddToCart = () => {
    // Create a cart item with quantity of 1
    const cartItem = {
      ...product,
      quantity: quantity
    };
    addToCart(cartItem);
    
    // Optional: Show a confirmation message
    alert(`Added ${product.title} to your cart!`);
  };
  
  return (
    <div className="featured-product">
      <div className="product-image">
        {product.image ? (
          <img src={product.image} alt={product.title} />
        ) : (
          <div className="image-placeholder"></div>
        )}
      </div>
      <h3>{product.title}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button 
        className="add-to-cart-button"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default FeaturedProduct; 