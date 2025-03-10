/**
 * Service for fetching product data from the Fake Store API
 */

// Base URL for the Fake Store API
const API_BASE_URL = 'https://fakestoreapi.com';

/**
 * Fetch all products from the API
 * @returns {Promise<Array>} Array of product objects
 */
export const getAllProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching all products:', error);
    throw error;
  }
};

/**
 * Fetch a limited number of products for featured display
 * @param {number} limit - Number of products to fetch
 * @returns {Promise<Array>} Array of product objects
 */
export const getFeaturedProducts = async (limit = 3) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products?limit=${limit}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching featured products:', error);
    throw error;
  }
};

/**
 * Fetch a single product by ID
 * @param {number} id - Product ID
 * @returns {Promise<Object>} Product object
 */
export const getProductById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
}; 