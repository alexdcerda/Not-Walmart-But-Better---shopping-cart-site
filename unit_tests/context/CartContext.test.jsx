import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CartProvider, CartContext } from '../../src/context/CartContext';
import { useContext } from 'react';

// Test component that uses the cart context
const TestComponent = () => {
  const { 
    cartItems, 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice 
  } = useContext(CartContext);
  
  return (
    <div>
      <div data-testid="cart-count">{cartItems.length}</div>
      <div data-testid="cart-total">{getTotalPrice().toFixed(2)}</div>
      <button 
        data-testid="add-item" 
        onClick={() => addToCart({ id: 1, name: 'Test Product', price: 10.99 })}
      >
        Add Item
      </button>
      <button 
        data-testid="remove-item" 
        onClick={() => removeFromCart(1)}
      >
        Remove Item
      </button>
      <button 
        data-testid="increase-quantity" 
        onClick={() => updateQuantity(1, 2)}
      >
        Increase Quantity
      </button>
      {cartItems.map(item => (
        <div key={item.id} data-testid={`item-${item.id}`}>
          {item.name} - Quantity: {item.quantity}
        </div>
      ))}
    </div>
  );
};

describe('CartContext', () => {
  it('provides an empty cart by default', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
    
    expect(screen.getByTestId('cart-count').textContent).toBe('0');
    expect(screen.getByTestId('cart-total').textContent).toBe('0.00');
  });
  
  it('allows adding items to the cart', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
    
    fireEvent.click(screen.getByTestId('add-item'));
    
    expect(screen.getByTestId('cart-count').textContent).toBe('1');
    expect(screen.getByTestId('cart-total').textContent).toBe('10.99');
    expect(screen.getByTestId('item-1').textContent).toContain('Test Product');
    expect(screen.getByTestId('item-1').textContent).toContain('Quantity: 1');
  });
  
  it('increases quantity when adding the same item', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
    
    fireEvent.click(screen.getByTestId('add-item'));
    fireEvent.click(screen.getByTestId('add-item'));
    
    expect(screen.getByTestId('cart-count').textContent).toBe('1');
    expect(screen.getByTestId('item-1').textContent).toContain('Quantity: 2');
    expect(screen.getByTestId('cart-total').textContent).toBe('21.98');
  });
  
  it('allows removing items from the cart', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
    
    fireEvent.click(screen.getByTestId('add-item'));
    fireEvent.click(screen.getByTestId('remove-item'));
    
    expect(screen.getByTestId('cart-count').textContent).toBe('0');
    expect(screen.getByTestId('cart-total').textContent).toBe('0.00');
    expect(screen.queryByTestId('item-1')).not.toBeInTheDocument();
  });
  
  it('allows updating item quantity', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
    
    fireEvent.click(screen.getByTestId('add-item'));
    fireEvent.click(screen.getByTestId('increase-quantity'));
    
    expect(screen.getByTestId('item-1').textContent).toContain('Quantity: 2');
    expect(screen.getByTestId('cart-total').textContent).toBe('21.98');
  });
}); 