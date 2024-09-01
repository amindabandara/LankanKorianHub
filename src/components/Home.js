import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="banner">
        <h1>Welcome to Lankan Korean Hub</h1>
        <p>Your one-stop shop for Korean ramen noodles in Sri Lanka.</p>
      </header>
      
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product">
            <img src="/images/shin-ramen.png" alt="Shin Ramen" />
            <h3>Shin Ramen</h3>
          </div>
          <div className="product">
            <img src="/images/buldk-cabo.jpg" alt="Buldak Carbonara" />
            <h3>Buldak Carbonara</h3>
          </div>
          <div className="product">
            <img src="/images/ert.webp" alt="Quadark cheese" />
            <h3>Buldak Quadark Cheese</h3>
          </div>
          <div className="product">
            <img src="/images/black.jpg" alt="Buldak Black" />
            <h3> Buldak Black</h3>
          </div>
        </div>
      </section>
      
      <section className="promotions">
        <h2>Current Promotions</h2>
        <p>No promotions available at now</p>
      </section>
      
      <section className="testimonials">
        <h2>Customer Testimonials</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <p>"Great selection of noodles and fast delivery!" - Shehan</p>
          </div>
          <div className="testimonial">
            <p>"Love the Buldak Carbonara! Will order again." - Peshala</p>
          </div>
          <div className="testimonial">
            <p>"Excellent customer service and quality products." - sadunika</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
