import { createContext, useState } from 'react';

// Create the context
export const CartContext = createContext();

// Create the provider component
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems(prevItems => {
      // Check if item already exists in cart
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // If item exists, add the new quantity to the existing quantity
        return prevItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: (item.quantity || 1) + (product.quantity || 1) } 
            : item
        );
      } else {
        // If item doesn't exist, add it with the specified quantity
        return [...prevItems, { ...product, quantity: product.quantity || 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(prevItems => 
      prevItems.filter(item => item.id !== productId)
    );
  };

  // Update item quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => 
      total + (item.price * (item.quantity || 1)), 0
    );
  };

  // Get total number of items in cart (including quantities)
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => 
      total + (item.quantity || 1), 0
    );
  };

  // Context value
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider; 