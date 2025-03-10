import { useState, useEffect } from 'react';
import { getFeaturedProducts } from '../../services/productService';
import FeaturedProduct from './FeaturedProduct';

/**
 * Component for displaying a grid of featured products on the home page
 */
function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true);
        // Fetch 3 featured products
        const data = await getFeaturedProducts(3);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching featured products:', error);
        setError('Failed to load featured products. Please try again later.');
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  if (loading) {
    return (
      <section className="featured-products">
        <h2>Featured Products</h2>
        <p className="featured-subtitle">A taste of what we offer. No fluorescent lighting required.</p>
        <div className="loading">Loading featured products...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="featured-products">
        <h2>Featured Products</h2>
        <p className="featured-subtitle">A taste of what we offer. No fluorescent lighting required.</p>
        <div className="error">{error}</div>
      </section>
    );
  }

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <p className="featured-subtitle">A taste of what we offer. No fluorescent lighting required.</p>
      <div className="featured-products-grid">
        {products.map(product => (
          <FeaturedProduct key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts; 