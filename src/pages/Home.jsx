import { Link } from 'react-router-dom';
import FeaturedProducts from '../components/home/FeaturedProducts';

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Not Walmart. <span className="highlight">Better.</span></h1>
          <p className="tagline">Shop like nobody's watching. We're definitely not tracking your every move.</p>
          <p className="sub-tagline">Quality products without the big-box experience.</p>
          <Link to="/shop" className="cta-button">
            Shop Now
          </Link>
        </div>
      </section>
      
      <section className="features">
        <div className="feature">
          <div className="feature-icon">🛍️</div>
          <h3>Curated Selection</h3>
          <p>We don't sell everything. Just the good stuff.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🚚</div>
          <h3>Fast Delivery</h3>
          <p>Get your items quickly without having to park half a mile away.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">💰</div>
          <h3>Fair Prices</h3>
          <p>No greeters, no massive stores. Just savings passed to you.</p>
        </div>
      </section>
      
      <FeaturedProducts />
      
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>"I can actually find what I'm looking for without walking 5 miles."</p>
            <p className="customer-name">— Sarah K.</p>
          </div>
          <div className="testimonial">
            <p>"The checkout process doesn't make me question my life choices."</p>
            <p className="customer-name">— Mike T.</p>
          </div>
          <div className="testimonial">
            <p>"Finally, a store where I don't need to bring snacks for the journey."</p>
            <p className="customer-name">— Alex R.</p>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <h2>Ready to shop without the hassle?</h2>
        <Link to="/shop" className="cta-button large">
          Shop Now
        </Link>
      </section>
    </div>
  );
}

export default Home; 