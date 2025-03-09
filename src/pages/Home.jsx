import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Buy Whatever You Want</h1>
          <p>Your one-stop shop for all your shopping needs</p>
          <Link to="/shop" className="cta-button">
            Shop Now
          </Link>
        </div>
      </section>
      
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="featured-products-grid">
          {/* We'll replace these with actual product components later */}
          <div className="featured-product">
            <div className="product-image placeholder"></div>
            <h3>Product 1</h3>
            <p>$19.99</p>
          </div>
          <div className="featured-product">
            <div className="product-image placeholder"></div>
            <h3>Product 2</h3>
            <p>$24.99</p>
          </div>
          <div className="featured-product">
            <div className="product-image placeholder"></div>
            <h3>Product 3</h3>
            <p>$14.99</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 