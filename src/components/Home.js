import React from 'react';
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="banner">
        <h1>Welcome to Lankan Korean Hub</h1>
        <p>Your one-stop shop for Korean ramen noodles in Sri Lanka.</p>
      </header>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="product">
              <img src="/images/s4.png" alt="Shin Ramen" />
              <h3>Shin Ramen</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product">
              <img src="/images/1.png" alt="Buldak Carbonara" />
              <h3>Buldak Carbonara</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product">
              <img src="/images/dakche.jpg" alt="HotDak Cheese" />
              <h3>HotDuck Cheese</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product">
              <img src="/images/3.png" alt="Buldak Black" />
              <h3>Buldak Black</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product">
              <img src="/images/seaf.jpg" alt="Neoguri" />
              <h3>Seafood Ramen</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product">
              <img src="/images/nohyu.jpg" alt="Pears" />
              <h3>Pears Ramen</h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="promotions">
        <h2>Current Promotions</h2>
        <p>No promotions available at now</p>
      </section>

      {/* New "Why Choose Us" section */}
      <section className="why-choose-us">
        <h2>Why Choose Lankan Korean Hub?</h2>
        <div className="reasons-list">
          <div className="reason">
            <h3>High-Quality Products</h3>
            <p>We offer authentic and top-quality Korean ramen noodles directly from trusted suppliers.</p>
          </div>
          <div className="reason">
            <h3>Fast Delivery</h3>
            <p>Enjoy quick and reliable delivery across Sri Lanka. Your order will be at your doorstep in no time!</p>
          </div>
          <div className="reason">
            <h3>Customer Satisfaction</h3>
            <p>Our customers love us! We strive to provide the best service and ensure a smooth shopping experience.</p>
          </div>
          <div className="reason">
            <h3>Exclusive Offers</h3>
            <p>Look out for special deals and discounts exclusive to Lankan Korean Hub shoppers!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
