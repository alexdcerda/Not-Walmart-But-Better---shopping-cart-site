import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Navbar from '../../src/components/common/Navbar';
import { CartContext } from '../../src/context/CartContext';

// Mock the CartContext
const mockCartContext = {
  cartItems: [
    { id: 1, name: 'Test Product', price: 10.99, quantity: 1 }
  ],
  getTotalItems: () => 1
};

// Empty cart context
const mockEmptyCartContext = {
  cartItems: [],
  getTotalItems: () => 0
};

// Wrapper component with context and router
const NavbarWithContext = ({ contextValue }) => {
  return (
    <BrowserRouter>
      <CartContext.Provider value={contextValue}>
        <Navbar />
      </CartContext.Provider>
    </BrowserRouter>
  );
};

describe('Navbar Component', () => {
  it('renders the navbar with logo and links', () => {
    render(<NavbarWithContext contextValue={mockEmptyCartContext} />);
    
    // Check if the logo is rendered
    expect(screen.getByText('not walmart')).toBeInTheDocument();
    
    // Check if navigation links are rendered
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toBeInTheDocument();
    
    // Check if cart icon is rendered
    expect(screen.getByText('🛒')).toBeInTheDocument();
    
    // Check if cart count is 0 when no items
    expect(screen.getByText('0')).toBeInTheDocument();
  });
  
  it('displays the correct number of items in cart', () => {
    render(<NavbarWithContext contextValue={mockCartContext} />);
    
    // Check if cart count shows the correct number
    expect(screen.getByText('1')).toBeInTheDocument();
  });
}); 