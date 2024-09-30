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
            <p>"Excellent customer service and quality products." - Sadunika</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
