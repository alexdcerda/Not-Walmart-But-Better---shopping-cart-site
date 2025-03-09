import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Cart from '../../src/components/cart/Cart';
import { CartContext } from '../../src/context/CartContext';

// Mock the CartContext
const mockEmptyCart = {
  cartItems: [],
  getTotalPrice: () => 0
};

const mockFilledCart = {
  cartItems: [
    { id: 1, name: 'Test Product 1', price: 10.99, quantity: 1 },
    { id: 2, name: 'Test Product 2', price: 20.99, quantity: 2 }
  ],
  getTotalPrice: () => 52.97 // 10.99 + (20.99 * 2)
};

// Wrapper component with context
const CartWithContext = ({ contextValue }) => {
  return (
    <CartContext.Provider value={contextValue}>
      <Cart />
    </CartContext.Provider>
  );
};

describe('Cart Component', () => {
  it('displays empty cart message when cart is empty', () => {
    render(<CartWithContext contextValue={mockEmptyCart} />);
    
    // Check if the empty cart message is displayed
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
    
    // Check that the checkout button is not displayed
    expect(screen.queryByText('Checkout')).not.toBeInTheDocument();
  });
  
  it('displays cart items and total when cart has items', () => {
    render(<CartWithContext contextValue={mockFilledCart} />);
    
    // Check if cart items are displayed
    expect(screen.getByText('Test Product 1')).toBeInTheDocument();
    expect(screen.getByText('Test Product 2')).toBeInTheDocument();
    
    // Check if the total price is displayed
    expect(screen.getByText('$52.97')).toBeInTheDocument();
    
    // Check if the checkout button is displayed
    expect(screen.getByText('Checkout')).toBeInTheDocument();
  });
}); 